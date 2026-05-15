// ============================================================
// data/passives.js
// Passive buffs offered at floor completion.
// To add a new passive: add an entry to PASSIVE_BUFFS and
// handle its effect in applyPassive() below.
// ============================================================

const PASSIVE_BUFFS = [
  {
    id:    'iron_skin',
    name:  'Iron Skin',
    emoji: '🛡️',
    desc:  '+3 max HP permanently',
  },
  {
    id:    'war_drums',
    name:  'War Drums',
    emoji: '🥁',
    desc:  '+1 to every ATK die face value',
  },
  {
    id:    'lucky',
    name:  'Lucky',
    emoji: '🍀',
    desc:  'Reroll one die once per combat',
  },
  {
    id:    'vampire',
    name:  'Vampiric',
    emoji: '🩸',
    desc:  'Heal 1 HP after each combat win',
  },
  {
    id:    'fortress',
    name:  'Fortress',
    emoji: '🏰',
    desc:  '+1 to every DEF die face value',
  },
  {
    id:    'scavenger',
    name:  'Scavenger',
    emoji: '🧺',
    desc:  'Sparing enemies gives +1 extra heal',
  },
  {
    id:    'berserker',
    name:  'Berserker',
    emoji: '⚡',
    desc:  '+2 ATK when HP is below 30%',
  },
  {
    id:    'scholar',
    name:  'Scholar',
    emoji: '📚',
    desc:  'Banking heals gives +1 to a random stat',
  },
  {
    id:    'swift',
    name:  'Swift',
    emoji: '💨',
    desc:  'Always see full enemy stats in combat',
  },
  {
    id:    'chosen',
    name:  'Chosen One',
    emoji: '✨',
    desc:  '+1 to all dice permanently',
  },
  {
    id:    'medic',
    name:  'Field Medic',
    emoji: '💉',
    desc:  'Each heal restores +3 extra HP',
  },
  {
    id:    'gambler',
    name:  'Gambler',
    emoji: '🎰',
    desc:  'Start each combat with one die pre-rolled at max (6)',
  },
];

// Apply a passive buff to the player state.
// Returns the modified player object.
function applyPassive(player, passiveId) {
  // Record it
  player.passives = [...(player.passives || []), passiveId];

  switch (passiveId) {
    case 'iron_skin':
      player.maxHp += 3;
      player.hp = Math.min(player.hp + 3, player.maxHp);
      break;
    case 'fortress':
      player.defDieBonus = (player.defDieBonus || 0) + 1;
      break;
    case 'war_drums':
      player.atkDieBonus = (player.atkDieBonus || 0) + 1;
      break;
    case 'chosen':
      player.diceBonus = (player.diceBonus || 0) + 1;
      break;
    case 'vampire':
      player.healOnKill = (player.healOnKill || 0) + 1;
      break;
    case 'medic':
      player.healBonus = (player.healBonus || 0) + 3;
      break;
    // lucky, scavenger, berserker, scholar, swift, gambler
    // are checked contextually in combat.js / player.js
    default:
      break;
  }

  return player;
}

// Check if player has a specific passive
function hasPassive(player, passiveId) {
  return (player.passives || []).includes(passiveId);
}

// Get 3 random unique passive choices, excluding already-owned ones
function getBuffChoices(player, count = BUFF_CHOICES_COUNT) {
  const owned = new Set(player.passives || []);
  const pool  = PASSIVE_BUFFS.filter(b => !owned.has(b.id));
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
