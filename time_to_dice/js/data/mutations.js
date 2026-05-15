// ============================================================
// data/mutations.js
// Defines what happens when a mutation is applied to the player.
// Each entry maps a trait ID to an applyTo(player) function.
// To add a new mutation effect: add a matching entry below.
// ============================================================

const MUTATION_EFFECTS = {

  // Passive stat boosts applied immediately on acquisition
  'Gooey': (player) => {
    // Effect fires each floor descent — handled in main.js nextFloor()
    // No immediate stat change needed here
    return player;
  },

  'Feral': (player) => {
    // Bonus per ATK die — handled in combat.js resolveCombat()
    return player;
  },

  'Echolocate': (player) => {
    player.seeEnemyStats = true;
    return player;
  },

  'Cunning': (player) => {
    // Bonus per DEF die — handled in combat.js
    return player;
  },

  'Undying': (player) => {
    // Checked in combat.js on fatal hit
    return player;
  },

  'Venom': (player) => {
    player.baseAtk += 1;
    return player;
  },

  'Ethereal': (player) => {
    player.dodgeChance = (player.dodgeChance || 0) + 0.20;
    return player;
  },

  'Brutish': (player) => {
    player.baseAtk += 2;
    return player;
  },

  'Arcane': (player) => {
    // Adds +1 die in combat — checked in combat.js getDiceCount()
    return player;
  },

  'Blood Drain': (player) => {
    player.healOnKill = (player.healOnKill || 0) + 1;
    return player;
  },

  'Regenerate': (player) => {
    player.baseDef += 1;
    return player;
  },

  'Dragonheart': (player) => {
    player.maxHp  += 5;
    player.hp      = Math.min(player.hp + 5, player.maxHp);
    player.baseAtk += 2;
    return player;
  },

  'Necromancy': (player) => {
    player.healOnKill = (player.healOnKill || 0) + 2;
    return player;
  },

  'Hellfire': (player) => {
    // Bonus ATK on low HP — checked in combat.js
    return player;
  },

  'Stonehide': (player) => {
    player.baseDef += 3;
    return player;
  },
};

// Called when a player wins combat and gains a mutation
function applyMutation(player, enemyType) {
  const mut = {
    name:      enemyType.name,
    emoji:     enemyType.emoji,
    trait:     enemyType.trait,
    traitDesc: enemyType.traitDesc,
  };

  // Always grant small permanent stat bump on any mutation
  player.maxHp   += 1;
  player.hp       = Math.min(player.hp + 1, player.maxHp);
  player.baseAtk += 1;

  // Apply trait-specific effect
  const effect = MUTATION_EFFECTS[mut.trait];
  if (effect) effect(player);

  player.mutations = [...(player.mutations || []), mut];
  return player;
}

// Checks if the player has a specific trait
function hasTrait(player, traitName) {
  return (player.mutations || []).some(m => m.trait === traitName);
}
