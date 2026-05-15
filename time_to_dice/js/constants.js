// ============================================================
// constants.js
// All game-wide constants and tuning values.
// Change numbers here to rebalance the game — no logic to touch.
// ============================================================

const GRID_SIZE = 40;         // Width and height of the dungeon grid in tiles
const VIEW_W    = 20;         // Tiles visible horizontally
const VIEW_H    = 14;         // Tiles visible vertically
const FOG_RADIUS = 6;         // How far the player can see

// Tile type identifiers
const TILE = Object.freeze({
  WALL:     0,
  FLOOR:    1,
  CORRIDOR: 2,
  EXIT:     3,
  SHRINE:   4,
});

// Dungeon generation tuning
const DUNGEON = Object.freeze({
  ROOM_ATTEMPTS:  60,           // How many rooms we try to place per floor
  ROOM_MIN_W:     4,
  ROOM_MAX_W:     9,
  ROOM_MIN_H:     4,
  ROOM_MAX_H:     8,
  SHRINE_MIN:     1,            // Minimum shrines per floor
  SHRINE_MAX:     2,            // Maximum shrines per floor
  ENEMIES_PER_ROOM_BASE: 1,     // Minimum enemies per room
  ENEMIES_SCALE_EVERY:   3,     // Add +1 enemy density every N floors
});

// Combat tuning
const COMBAT = Object.freeze({
  BASE_DICE:       3,           // Starting dice count per turn
  ENEMY_ATK_JITTER: 3,          // Enemy ATK varies by ±(jitter-1)
  BANK_CONVERT_COST: 3,         // Banked heals needed to convert to stats
  BANK_CONVERT_HP:   2,         // HP bonus from conversion
  BANK_CONVERT_ATK:  1,         // ATK bonus from conversion
  HEAL_AMOUNT_BASE:  5,         // Base HP restored per heal use
  HEAL_SCALE_PER_MUT: 0.5,      // Extra HP per mutation owned
  SPARE_HEAL_BASE:   3,         // Heals gained from sparing an enemy
});

// Scaling per floor
const SCALING = Object.freeze({
  ENEMY_HP_PER_FLOOR:  1.5,     // Flat HP added to enemies per floor
  ENEMY_ATK_PER_FLOOR: 0.5,     // Flat ATK added per floor
  BOSS_HP_PER_FLOOR:   5,
  BOSS_ATK_PER_FLOOR:  1.2,
});

// Player starting stats
const PLAYER_START = Object.freeze({
  HP:    30,
  MAX_HP: 30,
  BASE_ATK: 0,
  BASE_DEF: 0,
  DICE_COUNT: 3,
});

// Shrine cost (fraction of max HP)
const SHRINE_COST_FRACTION = 0.20;

// Number of passive buff choices shown at level-up
const BUFF_CHOICES_COUNT = 3;

// Movement repeat delay in ms (keyboard held down)
const MOVE_REPEAT_MS = 120;
