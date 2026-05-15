// ============================================================
// data/enemies.js
// All enemy type definitions.
// To add a new enemy: copy a block, edit values, set boss: false.
// To add a new boss: copy a block, set boss: true.
// ============================================================

const ENEMY_TYPES = [
  // ── Regular enemies ────────────────────────────────────────
  {
    id:        'slime',
    name:      'Slime',
    emoji:     '🟢',
    hp:        8,
    atk:       3,
    def:       1,
    trait:     'Gooey',
    traitDesc: '+1 max HP when descending each floor',
    boss:      false,
  },
  {
    id:        'rat',
    name:      'Rat',
    emoji:     '🐀',
    hp:        6,
    atk:       4,
    def:       0,
    trait:     'Feral',
    traitDesc: '+1 per ATK die rolled',
    boss:      false,
  },
  {
    id:        'bat',
    name:      'Bat',
    emoji:     '🦇',
    hp:        5,
    atk:       5,
    def:       1,
    trait:     'Echolocate',
    traitDesc: 'See full enemy stats in combat',
    boss:      false,
  },
  {
    id:        'goblin',
    name:      'Goblin',
    emoji:     '👺',
    hp:        10,
    atk:       4,
    def:       2,
    trait:     'Cunning',
    traitDesc: '+1 per DEF die rolled',
    boss:      false,
  },
  {
    id:        'skeleton',
    name:      'Skeleton',
    emoji:     '💀',
    hp:        12,
    atk:       5,
    def:       3,
    trait:     'Undying',
    traitDesc: 'Survive one fatal blow per floor',
    boss:      false,
  },
  {
    id:        'spider',
    name:      'Spider',
    emoji:     '🕷️',
    hp:        7,
    atk:       6,
    def:       1,
    trait:     'Venom',
    traitDesc: '+1 passive base ATK',
    boss:      false,
  },
  {
    id:        'ghost',
    name:      'Ghost',
    emoji:     '👻',
    hp:        9,
    atk:       7,
    def:       2,
    trait:     'Ethereal',
    traitDesc: '20% chance to dodge incoming damage',
    boss:      false,
  },
  {
    id:        'orc',
    name:      'Orc',
    emoji:     '👹',
    hp:        16,
    atk:       6,
    def:       3,
    trait:     'Brutish',
    traitDesc: '+2 base ATK permanently',
    boss:      false,
  },
  {
    id:        'wizard',
    name:      'Wizard',
    emoji:     '🧙',
    hp:        11,
    atk:       8,
    def:       1,
    trait:     'Arcane',
    traitDesc: '+1 die in every combat',
    boss:      false,
  },
  {
    id:        'vampire',
    name:      'Vampire',
    emoji:     '🧛',
    hp:        14,
    atk:       7,
    def:       2,
    trait:     'Blood Drain',
    traitDesc: 'Heal 1 HP after each combat win',
    boss:      false,
  },
  {
    id:        'troll',
    name:      'Troll',
    emoji:     '👾',
    hp:        18,
    atk:       5,
    def:       4,
    trait:     'Regenerate',
    traitDesc: '+1 passive base DEF',
    boss:      false,
  },

  // ── Boss enemies ──────────────────────────────────────────
  {
    id:        'dragon',
    name:      'Dragon',
    emoji:     '🐉',
    hp:        30,
    atk:       12,
    def:       5,
    trait:     'Dragonheart',
    traitDesc: '+5 max HP and +2 base ATK',
    boss:      true,
  },
  {
    id:        'lich',
    name:      'Lich',
    emoji:     '☠️',
    hp:        25,
    atk:       10,
    def:       6,
    trait:     'Necromancy',
    traitDesc: 'Heal 2 HP per kill',
    boss:      true,
  },
  {
    id:        'demon',
    name:      'Demon',
    emoji:     '😈',
    hp:        28,
    atk:       11,
    def:       4,
    trait:     'Hellfire',
    traitDesc: '+3 ATK when below 30% HP',
    boss:      true,
  },
  {
    id:        'golem',
    name:      'Stone Golem',
    emoji:     '🗿',
    hp:        35,
    atk:       9,
    def:       8,
    trait:     'Stonehide',
    traitDesc: '+3 base DEF permanently',
    boss:      true,
  },
];

// Helpers used by dungeon.js and combat.js
function getRegularEnemies() {
  return ENEMY_TYPES.filter(e => !e.boss);
}

function getBossEnemies() {
  return ENEMY_TYPES.filter(e => e.boss);
}

function getRandomEnemy(floor) {
  const pool = getRegularEnemies();
  const base = pool[Math.floor(Math.random() * pool.length)];
  return {
    ...base,
    hp:    base.hp  + Math.floor(floor * SCALING.ENEMY_HP_PER_FLOOR),
    maxHp: base.hp  + Math.floor(floor * SCALING.ENEMY_HP_PER_FLOOR),
    atk:   base.atk + Math.floor(floor * SCALING.ENEMY_ATK_PER_FLOOR),
  };
}

function getRandomBoss(floor) {
  const pool = getBossEnemies();
  const base = pool[Math.floor(Math.random() * pool.length)];
  return {
    ...base,
    hp:    base.hp  + floor * SCALING.BOSS_HP_PER_FLOOR,
    maxHp: base.hp  + floor * SCALING.BOSS_HP_PER_FLOOR,
    atk:   base.atk + Math.floor(floor * SCALING.BOSS_ATK_PER_FLOOR),
  };
}
