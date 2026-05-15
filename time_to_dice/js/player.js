// ============================================================
// player.js
// Player state creation and resource management (heals, banking).
// Combat stat changes live in combat.js.
// ============================================================

function createPlayer() {
  return {
    x:           0,
    y:           0,
    hp:          PLAYER_START.HP,
    maxHp:       PLAYER_START.MAX_HP,
    baseAtk:     PLAYER_START.BASE_ATK,
    baseDef:     PLAYER_START.BASE_DEF,
    diceCount:   PLAYER_START.DICE_COUNT,

    // Per-die bonuses from passives/shrines
    diceBonus:   0,   // Added to every die roll
    atkDieBonus: 0,   // Added to ATK-assigned dice
    defDieBonus: 0,   // Added to DEF-assigned dice

    // Derived flags (set by mutations/passives)
    dodgeChance:  0,
    healOnKill:   0,   // HP healed after winning combat
    healBonus:    0,   // Extra HP per heal use
    seeEnemyStats: false, // Echolocate / Swift

    // Survival flags
    undyingSaved: false, // Reset each floor
    rerollAvailable: false, // Lucky passive — reset each combat

    // Resources
    heals:       0,
    bankedHeals: 0,

    // Collections
    mutations: [],
    passives:  [],
  };
}

// ── HP Bar colour ───────────────────────────────────────────

function hpBarColor(hp, maxHp) {
  const pct = hp / maxHp;
  if (pct > 0.6) return 'var(--hp-high)';
  if (pct > 0.3) return 'var(--hp-mid)';
  return 'var(--hp-low)';
}

// ── Heal actions ─────────────────────────────────────────────

// Use one heal: restore HP immediately
function useHeal(player) {
  if (player.heals <= 0) return { player, message: null };
  const healAmt = COMBAT.HEAL_AMOUNT_BASE +
    Math.floor(player.mutations.length * COMBAT.HEAL_SCALE_PER_MUT) +
    (player.healBonus || 0);
  const newHp = Math.min(player.hp + healAmt, player.maxHp);
  return {
    player: { ...player, hp: newHp, heals: player.heals - 1 },
    message: { text: `💊 Healed +${healAmt} HP`, type: 'good' },
  };
}

// Bank one heal for later conversion
function bankHeal(player) {
  if (player.heals <= 0) return { player, message: null };
  let p = { ...player, heals: player.heals - 1, bankedHeals: player.bankedHeals + 1 };

  // Scholar passive: banking also gives +1 to a random stat
  if (hasPassive(p, 'scholar')) {
    if (Math.random() < 0.5) p.baseAtk += 1;
    else                      p.baseDef += 1;
  }

  return {
    player: p,
    message: { text: '🏦 Banked 1 heal.', type: '' },
  };
}

// Convert 3 banked heals into permanent stat boosts
function convertBanked(player) {
  if (player.bankedHeals < COMBAT.BANK_CONVERT_COST) return { player, message: null };
  const p = {
    ...player,
    bankedHeals: player.bankedHeals - COMBAT.BANK_CONVERT_COST,
    maxHp:       player.maxHp  + COMBAT.BANK_CONVERT_HP,
    hp:          Math.min(player.hp + COMBAT.BANK_CONVERT_HP, player.maxHp + COMBAT.BANK_CONVERT_HP),
    baseAtk:     player.baseAtk + COMBAT.BANK_CONVERT_ATK,
  };
  return {
    player: p,
    message: { text: `⬆️ Converted ${COMBAT.BANK_CONVERT_COST} heals → +${COMBAT.BANK_CONVERT_HP} max HP, +${COMBAT.BANK_CONVERT_ATK} ATK`, type: 'good' },
  };
}

// ── Floor transition ─────────────────────────────────────────

// Called when descending to a new floor (after buff choice)
function onFloorDescend(player, newFloor, newX, newY) {
  let p = { ...player, x: newX, y: newY, undyingSaved: false, rerollAvailable: hasPassive(player, 'lucky') };

  // Gooey mutation: +1 max HP per floor
  if (hasTrait(p, 'Gooey')) {
    p.maxHp += 1;
    p.hp = Math.min(p.hp + 1, p.maxHp);
  }

  return p;
}
