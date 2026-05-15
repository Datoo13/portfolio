// ============================================================
// renderer.js
// All DOM rendering. No game logic lives here.
// To swap emoji for sprites: replace the emoji strings in
// tileContent() and enemyContent() with <img> tags.
// ============================================================

// ── Screen switching ─────────────────────────────────────────

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const el = document.getElementById(`screen-${id}`);
  if (el) el.classList.remove('hidden');
}

// ── HP bar ───────────────────────────────────────────────────

function renderHpBar(trackEl, fillEl, hp, maxHp) {
  const pct = Math.max(0, (hp / maxHp) * 100);
  fillEl.style.width = `${pct}%`;
  fillEl.style.background = hpBarColor(hp, maxHp);
}

// ── Map rendering ─────────────────────────────────────────────

function buildMapDOM() {
  const container = document.getElementById('map-container');
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${VIEW_W}, var(--tile-px))`;

  const cells = [];
  for (let row = 0; row < VIEW_H; row++) {
    const rowCells = [];
    for (let col = 0; col < VIEW_W; col++) {
      const cell = document.createElement('div');
      cell.className = 'map-cell';
      container.appendChild(cell);
      rowCells.push(cell);
    }
    cells.push(rowCells);
  }
  return cells;
}

// ── SPRITE HOOK: replace return values with <img> elements ──
function tileContent(tileType) {
  switch (tileType) {
    case TILE.EXIT:   return '<span>🔽</span>';
    case TILE.SHRINE: return '<span>🔮</span>';
    default:          return '';
  }
}
function playerContent()     { return '<span>🧙‍♂️</span>'; }
function enemyContent(enemy) { return `<span>${enemy.emoji}</span>`; }

function renderMap(cells, grid, player, enemies, visitedSet, visibleSet) {
  const camX = Math.max(0, Math.min(GRID_SIZE - VIEW_W, player.x - Math.floor(VIEW_W / 2)));
  const camY = Math.max(0, Math.min(GRID_SIZE - VIEW_H, player.y - Math.floor(VIEW_H / 2)));

  for (let row = 0; row < VIEW_H; row++) {
    for (let col = 0; col < VIEW_W; col++) {
      const gx  = camX + col;
      const gy  = camY + row;
      const key = `${gx},${gy}`;
      const cell = cells[row][col];

      const isVisible = visibleSet.has(key);
      const isVisited = visitedSet.has(key);

      cell.className = 'map-cell';

      if (!isVisited) {
        cell.className += ' unseen';
        cell.innerHTML = '';
        continue;
      }

      cell.className += isVisible ? ' visible' : ' visited';

      if (player.x === gx && player.y === gy) {
        cell.className += ' t-floor t-player';
        cell.innerHTML  = playerContent();
        continue;
      }

      const enemy = isVisible
        ? enemies.find(e => e.alive && e.x === gx && e.y === gy)
        : null;

      if (enemy) {
        cell.className += ' t-floor t-enemy';
        cell.innerHTML  = enemyContent(enemy);
        continue;
      }

      const tileType = grid[gy]?.[gx] ?? TILE.WALL;
      switch (tileType) {
        case TILE.WALL:     cell.className += ' t-wall';     break;
        case TILE.FLOOR:    cell.className += ' t-floor';    break;
        case TILE.CORRIDOR: cell.className += ' t-corridor'; break;
        case TILE.EXIT:     cell.className += ' t-exit';     break;
        case TILE.SHRINE:   cell.className += ' t-shrine';   break;
        default:            cell.className += ' t-wall';
      }
      cell.innerHTML = tileContent(tileType);
    }
  }
}

// ── Sidebar panels ────────────────────────────────────────────

function renderStats(player) {
  document.getElementById('stat-hp-text').textContent = `${player.hp} / ${player.maxHp}`;
  renderHpBar(
    document.getElementById('stat-hp-track'),
    document.getElementById('stat-hp-fill'),
    player.hp, player.maxHp
  );
  document.getElementById('stat-atk').textContent    = `+${player.baseAtk}`;
  document.getElementById('stat-def').textContent    = `+${player.baseDef}`;
  document.getElementById('stat-dice').textContent   =
    player.mutations.some(m => m.trait === 'Arcane')
      ? `${player.diceCount} + 1`
      : `${player.diceCount}`;
  document.getElementById('stat-dbonus').textContent = `+${player.diceBonus || 0}`;
  document.getElementById('stat-heals').textContent  = player.heals;
  document.getElementById('stat-banked').textContent = player.bankedHeals;

  document.getElementById('btn-use-heal').disabled   = player.heals <= 0;
  document.getElementById('btn-bank-heal').disabled  = player.heals <= 0;
  document.getElementById('btn-convert').disabled    = player.bankedHeals < COMBAT.BANK_CONVERT_COST;
}

function renderMutations(player) {
  const container = document.getElementById('mut-list');
  if (player.mutations.length === 0) {
    container.innerHTML = '<div style="color:var(--text-dim);font-size:var(--fs-xs);">None yet.</div>';
    return;
  }
  container.innerHTML = player.mutations.map(m => `
    <div class="mut-entry">
      ${m.emoji} <span class="mut-name">${m.trait}</span>
      <span class="mut-desc"> — ${m.traitDesc}</span>
    </div>
  `).join('');
}

function renderPassives(player) {
  const container = document.getElementById('passive-list');
  const panel     = document.getElementById('cell-passives');
  if (!player.passives || player.passives.length === 0) {
    panel.classList.add('hidden');
    return;
  }
  panel.classList.remove('hidden');
  container.innerHTML = player.passives.map(pid => {
    const pb = PASSIVE_BUFFS.find(b => b.id === pid);
    return pb ? `<div class="passive-entry">${pb.emoji} ${pb.name}</div>` : '';
  }).join('');
}

function renderLog(log) {
  const container = document.getElementById('explore-log');
  container.innerHTML = log.slice(-10).map(entry => {
    const cls = entry.type ? ` ${entry.type}` : '';
    return `<div class="log-entry${cls}">${entry.text}</div>`;
  }).join('');
  container.scrollTop = container.scrollHeight;
}

// ── Combat UI ─────────────────────────────────────────────────

function renderCombat(combatState, player) {
  const { enemy, playerDice, assignments, enemyNextAtk, round } = combatState;

  document.getElementById('combat-enemy-emoji').textContent = enemy.emoji;
  const nameEl = document.getElementById('combat-enemy-name');
  nameEl.textContent = (enemy.boss ? '👑 ' : '') + enemy.name;
  nameEl.className   = enemy.boss ? 'boss' : '';
  document.getElementById('combat-round').textContent = `Round ${round}`;

  renderHpBar(
    document.getElementById('combat-enemy-hp-track'),
    document.getElementById('combat-enemy-hp-fill'),
    enemy.hp, enemy.maxHp
  );
  document.getElementById('combat-enemy-hp-text').textContent = `${Math.max(0, enemy.hp)} / ${enemy.maxHp}`;

  const showStats = player.seeEnemyStats || hasPassive(player, 'swift');
  const statsEl   = document.getElementById('combat-enemy-stats');
  if (showStats) {
    statsEl.textContent = `ATK ${enemy.atk} · DEF ${enemy.def || 0} · HP ${enemy.hp}`;
    statsEl.classList.remove('hidden');
  } else {
    statsEl.classList.add('hidden');
  }

  document.getElementById('enemy-warning').textContent =
    `⚠️ Enemy plans to deal ${enemyNextAtk} damage`;

  const diceRow = document.getElementById('combat-dice-row');
  diceRow.innerHTML = '';
  playerDice.forEach((val, i) => {
    const asn = assignments[i];
    const die = document.createElement('div');
    die.className = 'die' + (asn === 'atk' ? ' atk' : asn === 'def' ? ' def' : '');
    die.textContent = val;
    die.title = 'Click: ATK → DEF → unassigned';
    if (!combatState.rerollUsed) die.className += ' reroll-hint';
    die.addEventListener('click',       () => window.onDieClick(i));
    die.addEventListener('contextmenu', (e) => { e.preventDefault(); window.onDieReroll(i); });
    diceRow.appendChild(die);
  });

  const atkDice = playerDice.filter((_, i) => assignments[i] === 'atk');
  const defDice = playerDice.filter((_, i) => assignments[i] === 'def');
  const atkTotal = atkDice.reduce((s, d) => s + d + (player.atkDieBonus || 0), 0)
    + player.baseAtk
    + (hasTrait(player, 'Feral') ? atkDice.length : 0)
    + (hasPassive(player, 'berserker') && player.hp < player.maxHp * 0.3 ? 2 : 0);
  const defTotal = defDice.reduce((s, d) => s + d + (player.defDieBonus || 0), 0)
    + player.baseDef
    + (hasTrait(player, 'Cunning') ? defDice.length : 0);

  document.getElementById('combat-atk-total').textContent = atkTotal;
  document.getElementById('combat-def-total').textContent = defTotal;

  document.getElementById('cpanel-hp-text').textContent = `${player.hp} / ${player.maxHp}`;
  renderHpBar(
    document.getElementById('cpanel-hp-track'),
    document.getElementById('cpanel-hp-fill'),
    player.hp, player.maxHp
  );
  document.getElementById('cpanel-atk').textContent   = `+${player.baseAtk}`;
  document.getElementById('cpanel-def').textContent   = `+${player.baseDef}`;
  document.getElementById('cpanel-bonus').textContent = `+${player.diceBonus || 0}`;
  document.getElementById('cpanel-heals').textContent = player.heals;

  const commitBtn   = document.getElementById('btn-commit');
  const allAssigned = assignments.every(a => a !== null);
  commitBtn.disabled    = !allAssigned;
  commitBtn.textContent = allAssigned
    ? '⚔️ Commit'
    : `⚔️ Commit (${assignments.filter(Boolean).length}/${playerDice.length})`;

  document.getElementById('btn-combat-heal').disabled = player.heals <= 0;

  const logEl = document.getElementById('combat-log-list');
  logEl.innerHTML = combatState.log.slice(-10).map(l =>
    `<div class="log-entry">${l}</div>`
  ).join('');
  logEl.scrollTop = logEl.scrollHeight;
}

// ── Level-up / buff choices ───────────────────────────────────

function renderBuffChoices(choices) {
  const container = document.getElementById('buff-choices');
  container.innerHTML = '';
  choices.forEach(buff => {
    const card = document.createElement('div');
    card.className = 'buff-card';
    card.innerHTML = `
      <div class="buff-emoji">${buff.emoji}</div>
      <div class="buff-name">${buff.name}</div>
      <div class="buff-desc">${buff.desc}</div>
    `;
    card.addEventListener('click', () => window.onBuffChosen(buff));
    container.appendChild(card);
  });
}

// ── Game over ─────────────────────────────────────────────────

function renderGameOver(player, floor) {
  document.getElementById('go-floor').textContent = floor;
  document.getElementById('go-muts').textContent  = player.mutations.length;
  const mutsEl = document.getElementById('go-mut-list');
  mutsEl.innerHTML = player.mutations.map(m =>
    `<div class="mut-badge">${m.emoji} ${m.name}</div>`
  ).join('');
}

// ── Floor label ───────────────────────────────────────────────

function renderFloorLabel(floor, player) {
  document.getElementById('floor-label').textContent =
    `Floor ${floor}  ·  (${player.x}, ${player.y})`;
}
