// ============================================================
// main.js
// Top-level game state machine.
// Owns: phase, player, dungeon, enemies, log, combatState.
// Calls into: dungeon.js, player.js, combat.js, renderer.js.
// ============================================================

// ── Game state (all mutable, scoped to this file) ────────────

let phase       = 'title';   // title | explore | combat | shrine | levelup | gameover
let floor       = 1;
let player      = null;
let dungeon     = null;
let enemies     = [];
let visitedSet  = new Set();
let combatState = null;
let mapCells    = null;       // cached DOM cell grid from renderer
let gameLog     = [];         // array of { text, type }

// ── Init ─────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  buildUI();
  bindStaticButtons();
  initInput();
  showScreen('title');
});

function bindStaticButtons() {
  // Title
  document.getElementById('btn-start').addEventListener('click', startGame);

  // Explore
  document.getElementById('btn-use-heal').addEventListener('click',  onUseHeal);
  document.getElementById('btn-bank-heal').addEventListener('click', onBankHeal);
  document.getElementById('btn-convert').addEventListener('click',   onConvert);

  // Combat
  document.getElementById('btn-commit').addEventListener('click',      onCommit);
  document.getElementById('btn-spare').addEventListener('click',       onSpare);
  document.getElementById('btn-combat-heal').addEventListener('click', onCombatHeal);

  // Shrine
  document.getElementById('btn-shrine-use').addEventListener('click',   onShrineUse);
  document.getElementById('btn-shrine-leave').addEventListener('click', onShrineLeave);

  // Game over
  document.getElementById('btn-restart').addEventListener('click', startGame);

  // Die interaction hooks (called from renderer.js via window.on*)
  window.onDieClick   = onDieClick;
  window.onDieReroll  = onDieReroll;
  window.onBuffChosen = onBuffChosen;
  window.onPlayerMove = onPlayerMove;
}

// ── Start / restart ──────────────────────────────────────────

function startGame() {
  floor      = 1;
  player     = createPlayer();
  gameLog    = [{ text: '⚔️ The dungeon awaits. Survive as long as you can.', type: '' }];

  loadFloor(player);
}

function loadFloor(p) {
  const result   = generateDungeon(floor);
  dungeon        = { grid: result.grid, rooms: result.rooms };
  enemies        = result.enemies;

  player         = { ...p, x: result.playerStart.x, y: result.playerStart.y };

  const visible  = computeVisible(player);
  visitedSet     = new Set(visible);

  // Build map DOM once per run start (reuse cells each floor)
  if (!mapCells) {
    mapCells = buildMapDOM();
  }

  phase = 'explore';
  showScreen('explore');
  fullExploreRender();
}

// ── Explore rendering ─────────────────────────────────────────

function fullExploreRender() {
  const visible = computeVisible(player);
  renderMap(mapCells, dungeon.grid, player, enemies, visitedSet, visible);
  renderStats(player);
  renderMutations(player);
  renderPassives(player);
  renderLog(gameLog);
  renderFloorLabel(floor, player);
}

// ── Movement ─────────────────────────────────────────────────

function onPlayerMove(dx, dy) {
  if (phase !== 'explore') return;

  const nx = player.x + dx;
  const ny = player.y + dy;

  // Bounds check
  if (nx < 0 || ny < 0 || nx >= GRID_SIZE || ny >= GRID_SIZE) return;

  // Wall check
  const cell = dungeon.grid[ny][nx];
  if (cell === TILE.WALL) return;

  // Enemy collision → start combat
  const enemy = enemies.find(e => e.alive && e.x === nx && e.y === ny);
  if (enemy) {
    enterCombat(enemy);
    return;
  }

  // Move
  player = { ...player, x: nx, y: ny };

  // Update fog
  const visible = computeVisible(player);
  visible.forEach(k => visitedSet.add(k));

  // Special tile handling
  if (cell === TILE.EXIT) {
    const bossAlive = enemies.some(e => e.alive && e.boss);
    if (bossAlive) {
      pushLog('⛔ Defeat the boss before you can descend!', 'warn');
      fullExploreRender();
      return;
    }
    enterLevelUp();
    return;
  }

  if (cell === TILE.SHRINE) {
    dungeon.grid[ny][nx] = TILE.FLOOR; // consume shrine
    enterShrine();
    return;
  }

  fullExploreRender();
}

// ── Heal actions (explore) ────────────────────────────────────

function onUseHeal() {
  const result = useHeal(player);
  if (!result.message) return;
  player = result.player;
  pushLog(result.message.text, result.message.type);
  fullExploreRender();
}

function onBankHeal() {
  const result = bankHeal(player);
  if (!result.message) return;
  player = result.player;
  pushLog(result.message.text, result.message.type);
  fullExploreRender();
}

function onConvert() {
  const result = convertBanked(player);
  if (!result.message) return;
  player = result.player;
  pushLog(result.message.text, result.message.type);
  fullExploreRender();
}

// ── Combat ───────────────────────────────────────────────────

function enterCombat(enemy) {
  phase       = 'combat';
  combatState = startCombat(player, enemy);
  showScreen('combat');
  renderCombat(combatState, player);
}

function onDieClick(idx) {
  if (phase !== 'combat') return;
  const cur  = combatState.assignments[idx];
  const next = cur === null ? 'atk' : cur === 'atk' ? 'def' : null;
  const newAssignments = [...combatState.assignments];
  newAssignments[idx]  = next;
  combatState = { ...combatState, assignments: newAssignments };
  renderCombat(combatState, player);
}

function onDieReroll(idx) {
  if (phase !== 'combat') return;
  const newState = rerollDie(combatState, idx, player);
  if (newState === combatState) return; // already used
  combatState = newState;
  player      = { ...player, rerollAvailable: false };
  renderCombat(combatState, player);
}

function onCommit() {
  if (phase !== 'combat') return;

  const result = resolveRound(player, combatState);
  player      = result.player;
  combatState = result.combatState;

  if (result.outcome === 'playerWin') {
    // Mark enemy dead
    enemies = enemies.map(e => e.uid === combatState.enemy.uid ? { ...e, alive: false } : e);

    // Apply mutation
    player = applyMutation(player, combatState.enemy);
    pushLog(`🏆 ${combatState.enemy.emoji} defeated! Gained: ${combatState.enemy.trait}`, 'good');

    phase = 'explore';
    showScreen('explore');
    fullExploreRender();
    return;
  }

  if (result.outcome === 'playerDead') {
    phase = 'gameover';
    renderGameOver(player, floor);
    showScreen('gameover');
    return;
  }

  // Combat continues
  // Shake animation on the enemy panel
  const panel = document.getElementById('combat-enemy-panel');
  panel.classList.remove('shake');
  void panel.offsetWidth; // reflow trick
  panel.classList.add('shake');
  setTimeout(() => panel.classList.remove('shake'), 400);

  renderCombat(combatState, player);
}

function onSpare() {
  if (phase !== 'combat') return;
  const result = spareEnemy(player, combatState);
  player  = result.player;
  enemies = enemies.map(e => e.uid === combatState.enemy.uid ? { ...e, alive: false } : e);
  pushLog(result.log.text, result.log.type);
  combatState = null;
  phase = 'explore';
  showScreen('explore');
  fullExploreRender();
}

function onCombatHeal() {
  if (phase !== 'combat' || player.heals <= 0) return;
  const result = useHeal(player);
  player = result.player;
  renderCombat(combatState, player);
}

// ── Shrine ───────────────────────────────────────────────────

function enterShrine() {
  phase = 'shrine';
  const cost = Math.floor(player.maxHp * SHRINE_COST_FRACTION);
  document.getElementById('shrine-desc').textContent =
    `Sacrifice ${cost} HP to permanently increase all dice rolls by +1.`;
  document.getElementById('shrine-hp-info').textContent =
    `Your HP: ${player.hp} / ${player.maxHp}`;
  showScreen('shrine');
}

function onShrineUse() {
  const result = useShrine(player);
  if (!result.success) {
    pushLog(result.message, 'warn');
  } else {
    player = result.player;
    pushLog(result.message, 'good');
  }
  phase = 'explore';
  showScreen('explore');
  fullExploreRender();
}

function onShrineLeave() {
  phase = 'explore';
  showScreen('explore');
  fullExploreRender();
}

// ── Level-up ─────────────────────────────────────────────────

function enterLevelUp() {
  phase = 'levelup';
  document.getElementById('levelup-heading').textContent = `Floor ${floor} Complete!`;
  const choices = getBuffChoices(player);
  renderBuffChoices(choices);
  showScreen('levelup');
}

function onBuffChosen(buff) {
  player = applyPassive(player, buff.id);
  pushLog(`${buff.emoji} ${buff.name} acquired!`, 'good');

  floor += 1;
  mapCells = null; // force map DOM rebuild for new floor
  document.getElementById('map-container').innerHTML = '';

  player = onFloorDescend(player, floor, 0, 0); // coords set by loadFloor
  loadFloor(player);
}

// ── Log helper ───────────────────────────────────────────────

function pushLog(text, type) {
  gameLog.push({ text, type: type || '' });
  if (gameLog.length > 60) gameLog.shift();
}
