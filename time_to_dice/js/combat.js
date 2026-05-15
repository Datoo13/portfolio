// ============================================================
// combat.js
// Pure combat logic — no DOM access.
// All functions take state in, return new state out.
// ============================================================

// ── Dice ─────────────────────────────────────────────────────

function rollDie(bonus) {
  return Math.max(1, Math.floor(Math.random() * 6) + 1 + (bonus || 0));
}

function rollDice(count, bonus) {
  return Array.from({ length: count }, () => rollDie(bonus));
}

// How many dice does the player roll this combat?
function getDiceCount(player) {
  let count = player.diceCount;
  if (hasTrait(player, 'Arcane')) count += 1;
  return count;
}

// ── Combat setup ─────────────────────────────────────────────

// Create a fresh combat state when battle begins
function startCombat(player, enemy) {
  const count = getDiceCount(player);
  const dice  = rollDice(count, player.diceBonus);

  // Gambler passive: set first die to 6 before bonus
  if (hasPassive(player, 'gambler') && dice.length > 0) {
    dice[0] = Math.min(6, 6 + (player.diceBonus || 0));
  }

  return {
    enemy:          { ...enemy, maxHp: enemy.maxHp || enemy.hp },
    playerDice:     dice,
    assignments:    Array(dice.length).fill(null), // null | 'atk' | 'def'
    enemyNextAtk:   calcEnemyAtk(enemy),
    round:          1,
    rerollUsed:     !hasPassive(player, 'lucky'), // if no lucky, already "used"
    log:            [`⚔️ Battle with ${enemy.emoji} ${enemy.name}!`],
  };
}

// Enemy ATK for the upcoming round (with jitter)
function calcEnemyAtk(enemy) {
  const jitter = Math.floor(Math.random() * COMBAT.ENEMY_ATK_JITTER) - 1;
  return Math.max(1, enemy.atk + jitter);
}

// ── Reroll ───────────────────────────────────────────────────

function rerollDie(combatState, dieIndex, player) {
  if (combatState.rerollUsed) return combatState;
  const dice = [...combatState.playerDice];
  dice[dieIndex] = rollDie(player.diceBonus);
  return { ...combatState, playerDice: dice, rerollUsed: true };
}

// ── Resolve one combat round ──────────────────────────────────
// Returns { player, combatState, outcome }
// outcome: 'continue' | 'playerWin' | 'playerDead'

function resolveRound(player, combatState) {
  const { playerDice, assignments, enemy, enemyNextAtk } = combatState;

  // Ensure all dice assigned
  if (assignments.some(a => a === null)) {
    return { player, combatState, outcome: 'continue', log: ['Assign all dice first!'] };
  }

  // ── Player attack ──────────────────────────────────────────
  const atkDice = playerDice.filter((_, i) => assignments[i] === 'atk');
  const defDice = playerDice.filter((_, i) => assignments[i] === 'def');

  let atkSum = atkDice.reduce((s, d) => s + d + (player.atkDieBonus || 0), 0) + player.baseAtk;

  // Feral: +1 per ATK die
  if (hasTrait(player, 'Feral')) atkSum += atkDice.length;

  // Cunning: +1 per DEF die (applied to def, not atk — tracked below)
  let defSum = defDice.reduce((s, d) => s + d + (player.defDieBonus || 0), 0) + player.baseDef;
  if (hasTrait(player, 'Cunning')) defSum += defDice.length;

  // Berserker: +2 ATK when low HP
  if (hasPassive(player, 'berserker') && player.hp < player.maxHp * 0.3) atkSum += 2;
  // Hellfire mutation
  if (hasTrait(player, 'Hellfire') && player.hp < player.maxHp * 0.3) atkSum += 3;

  // Damage to enemy
  let newEnemyHp = enemy.hp - atkSum;
  const atkLog = `🗡️ You deal ${atkSum} dmg. Enemy HP: ${Math.max(0, newEnemyHp)}/${enemy.maxHp}`;

  // ── Enemy attack ───────────────────────────────────────────
  let damage = Math.max(0, enemyNextAtk - defSum);

  // Dodge (Ethereal / dodge chance)
  const dodged = player.dodgeChance > 0 && Math.random() < player.dodgeChance;
  if (dodged) damage = 0;

  const defLog = dodged
    ? `💨 You dodged the attack!`
    : `🛡️ Blocked ${defSum}. Enemy deals ${damage} dmg.`;

  let newPlayerHp = player.hp - damage;

  const roundLog = [atkLog, defLog];

  // ── Player dead? ───────────────────────────────────────────
  if (newPlayerHp <= 0) {
    // Undying save
    if (hasTrait(player, 'Undying') && !player.undyingSaved) {
      newPlayerHp = 1;
      const p = {
        ...player,
        hp: 1,
        undyingSaved: true,
      };
      roundLog.push('💀 Undying saves you! (once per floor)');
      const nextEnemy     = { ...enemy, hp: Math.max(0, newEnemyHp) };
      const nextDice      = rollDice(getDiceCount(p), p.diceBonus);
      const nextCombat    = {
        ...combatState,
        enemy:       nextEnemy,
        playerDice:  nextDice,
        assignments: Array(nextDice.length).fill(null),
        enemyNextAtk: calcEnemyAtk(nextEnemy),
        round:       combatState.round + 1,
        log:         [...combatState.log, ...roundLog],
      };
      return { player: p, combatState: nextCombat, outcome: 'continue' };
    }

    return {
      player: { ...player, hp: 0 },
      combatState,
      outcome: 'playerDead',
      log: roundLog,
    };
  }

  // ── Enemy dead? ────────────────────────────────────────────
  if (newEnemyHp <= 0) {
    let p = { ...player, hp: newPlayerHp };

    // Heal on kill (Vampiric / Necromancy / Blood Drain)
    if (p.healOnKill > 0) {
      p.hp = Math.min(p.hp + p.healOnKill, p.maxHp);
      roundLog.push(`🩸 Drained ${p.healOnKill} HP.`);
    }

    return {
      player: p,
      combatState: { ...combatState, enemy: { ...enemy, hp: 0 }, log: [...combatState.log, ...roundLog] },
      outcome: 'playerWin',
      log: roundLog,
    };
  }

  // ── Combat continues ───────────────────────────────────────
  const nextPlayer  = { ...player, hp: newPlayerHp };
  const nextEnemy   = { ...enemy, hp: newEnemyHp };
  const nextDice    = rollDice(getDiceCount(nextPlayer), nextPlayer.diceBonus);
  const nextCombat  = {
    ...combatState,
    enemy:        nextEnemy,
    playerDice:   nextDice,
    assignments:  Array(nextDice.length).fill(null),
    enemyNextAtk: calcEnemyAtk(nextEnemy),
    round:        combatState.round + 1,
    log:          [...combatState.log, ...roundLog],
  };

  return { player: nextPlayer, combatState: nextCombat, outcome: 'continue' };
}

// ── Spare an enemy ───────────────────────────────────────────

function spareEnemy(player, combatState) {
  const bonus  = hasPassive(player, 'scavenger') ? 1 : 0;
  const heals  = COMBAT.SPARE_HEAL_BASE + bonus;
  return {
    player: { ...player, heals: player.heals + heals },
    log:    { text: `🤝 Spared ${combatState.enemy.emoji}. Gained ${heals} heals.`, type: 'good' },
  };
}

// ── Shrine ───────────────────────────────────────────────────

function useShrine(player) {
  const cost = Math.floor(player.maxHp * SHRINE_COST_FRACTION);
  if (player.hp <= cost) {
    return { player, success: false, message: '❌ Not enough HP for the shrine.' };
  }
  return {
    player:  { ...player, hp: player.hp - cost, diceBonus: (player.diceBonus || 0) + 1 },
    success: true,
    message: `🔮 Shrine: −${cost} HP → all dice permanently +1!`,
  };
}
