// ============================================================
// ui.js
// Builds the static HTML structure for all screens.
// Layout: CSS grid drives all sizing — no JS layout logic.
// ============================================================

function buildUI() {
  const app = document.getElementById('app');
  app.innerHTML = `

    <!-- ═══════════════════════════════════════════════
         TITLE SCREEN
    ═══════════════════════════════════════════════ -->
    <div id="screen-title" class="screen">
      <div class="title-logo">MUTADUNGEON</div>
      <div class="title-sub">An endless roguelike of dice &amp; mutation</div>
      <div class="how-to-play">
        <div>🎲 <strong>Explore</strong> the dungeon tile by tile</div>
        <div>⚔️ <strong>Fight</strong> — assign dice to ATK or DEF each round</div>
        <div>🤝 <strong>Spare</strong> enemies for healing instead of mutations</div>
        <div>🔽 <strong>Reach the exit</strong> to descend deeper</div>
        <div>🧬 <strong>Mutate</strong> and grow stronger with every win</div>
        <div>🔮 <strong>Shrines</strong> sacrifice HP for permanent dice power</div>
      </div>
      <div class="key-hint">Arrow keys or WASD to move · Right-click a die to reroll (Lucky)</div>
      <button class="btn-primary" id="btn-start">▶ BEGIN RUN</button>
    </div>

    <!-- ═══════════════════════════════════════════════
         EXPLORE SCREEN
         Landscape grid:
           [ map        | sidebar ]
           [ dpad | log | sidebar ]
         Portrait grid:
           [ map              ]
           [ dpad | stats     ]
           [ muts  | log      ]
    ═══════════════════════════════════════════════ -->
    <div id="screen-explore" class="screen hidden">

      <div id="explore-grid">

        <!-- Left column: map on top, dpad+log on bottom -->
        <div id="explore-main">

          <div id="cell-map">
            <div id="floor-label"></div>
            <div id="map-container"></div>
          </div>

          <div id="explore-bottom">
            <div id="cell-dpad">
              <div id="dpad"></div>
            </div>
            <div id="cell-log" class="panel">
              <div class="panel-title">📜 Log</div>
              <div id="explore-log" class="scroll-inner"></div>
            </div>
          </div>

        </div>

        <!-- Right column: stats, mutations, passives stacked -->
        <div id="explore-sidebar">

          <div id="cell-stats" class="panel">
            <div class="panel-title">🧙‍♂️ Stats</div>
            <div class="hp-bar-track" id="stat-hp-track">
              <div class="hp-bar-fill" id="stat-hp-fill"></div>
            </div>
            <div class="hp-text" id="stat-hp-text">30 / 30</div>
            <div class="stat-row"><span>⚔️ ATK</span><span id="stat-atk">+0</span></div>
            <div class="stat-row"><span>🛡️ DEF</span><span id="stat-def">+0</span></div>
            <div class="stat-row"><span>🎲 Dice</span><span id="stat-dice">3</span></div>
            <div class="stat-row"><span>🔮 Bonus</span><span id="stat-dbonus">+0</span></div>
            <div class="stat-row"><span>💊 Heals</span><span id="stat-heals">0</span></div>
            <div class="stat-row"><span>🏦 Banked</span><span id="stat-banked">0</span></div>
            <div class="heal-row">
              <button class="btn-sm" id="btn-use-heal" disabled>💊 Use</button>
              <button class="btn-sm" id="btn-bank-heal" disabled>🏦 Bank</button>
              <button class="btn-sm" id="btn-convert" disabled>⬆️ ×3</button>
            </div>
          </div>

          <div id="cell-muts" class="panel">
            <div class="panel-title">🧬 Mutations</div>
            <div id="mut-list" class="scroll-inner"></div>
          </div>

          <div id="cell-passives" class="panel">
            <div class="panel-title">✨ Passives</div>
            <div id="passive-list" class="scroll-inner"></div>
          </div>

        </div>

      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         COMBAT SCREEN
         Landscape:  [ enemy | player | log ]
         Portrait:   [ enemy ]
                     [ player | log   ]
    ═══════════════════════════════════════════════ -->
    <div id="screen-combat" class="screen hidden">

      <div id="combat-grid">

        <div id="ccell-enemy" class="panel">
          <div id="combat-enemy-emoji">❓</div>
          <div id="combat-enemy-name">Enemy</div>
          <div id="combat-round">Round 1</div>
          <div id="combat-enemy-stats" class="hidden"></div>
          <div class="hp-bar-track" id="combat-enemy-hp-track">
            <div class="hp-bar-fill" id="combat-enemy-hp-fill"></div>
          </div>
          <div class="hp-text" id="combat-enemy-hp-text"></div>
          <div id="enemy-warning">⚠️ Enemy plans to deal ? damage</div>
          <div id="combat-dice-label">Click dice to cycle ATK 🗡️ → DEF 🛡️ → unassigned</div>
          <div class="dice-row" id="combat-dice-row"></div>
          <div id="combat-totals">
            <div>🗡️ ATK: <span id="combat-atk-total">0</span></div>
            <div>🛡️ DEF: <span id="combat-def-total">0</span></div>
          </div>
          <div id="combat-assign-hint">Right-click a die to reroll (Lucky, once per combat)</div>
          <div id="combat-actions">
            <button id="btn-commit" disabled>⚔️ Commit</button>
            <button class="btn-spare" id="btn-spare">🤝 Spare</button>
            <button class="btn-sm" id="btn-combat-heal" disabled>💊 Heal</button>
          </div>
        </div>

        <div id="ccell-player" class="panel">
          <div class="panel-title">🧙‍♂️ You</div>
          <div class="hp-bar-track" id="cpanel-hp-track">
            <div class="hp-bar-fill" id="cpanel-hp-fill"></div>
          </div>
          <div class="hp-text" id="cpanel-hp-text"></div>
          <div class="stat-row"><span>⚔️ ATK</span><span id="cpanel-atk"></span></div>
          <div class="stat-row"><span>🛡️ DEF</span><span id="cpanel-def"></span></div>
          <div class="stat-row"><span>🔮 Bonus</span><span id="cpanel-bonus"></span></div>
          <div class="stat-row"><span>💊 Heals</span><span id="cpanel-heals"></span></div>
        </div>

        <div id="ccell-log" class="panel">
          <div class="panel-title">⚔️ Combat Log</div>
          <div id="combat-log-list" class="scroll-inner"></div>
        </div>

      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         SHRINE SCREEN
    ═══════════════════════════════════════════════ -->
    <div id="screen-shrine" class="screen hidden">
      <div class="shrine-emoji">🔮</div>
      <h2 class="screen-heading purple">Ancient Shrine</h2>
      <p id="shrine-desc" class="screen-body"></p>
      <p id="shrine-hp-info" class="screen-body green"></p>
      <div class="screen-actions">
        <button class="btn-shrine" id="btn-shrine-use">🩸 Sacrifice</button>
        <button id="btn-shrine-leave">🚪 Leave</button>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════
         LEVEL-UP SCREEN
    ═══════════════════════════════════════════════ -->
    <div id="screen-levelup" class="screen hidden">
      <div class="screen-icon">🔽</div>
      <h2 class="screen-heading amber" id="levelup-heading">Floor Complete!</h2>
      <p class="screen-body">Choose a passive buff for the rest of your run:</p>
      <div id="buff-choices"></div>
    </div>

    <!-- ═══════════════════════════════════════════════
         GAME OVER SCREEN
    ═══════════════════════════════════════════════ -->
    <div id="screen-gameover" class="screen hidden">
      <div class="screen-icon">💀</div>
      <div class="go-title">YOU HAVE FALLEN</div>
      <div class="screen-body dim">
        Reached Floor <strong id="go-floor">1</strong> with
        <strong id="go-muts">0</strong> mutations
      </div>
      <div id="go-mut-list"></div>
      <button class="btn-primary" id="btn-restart">🔄 New Run</button>
    </div>

  `;
}
