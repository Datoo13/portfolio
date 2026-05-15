// ============================================================
// input.js
// Keyboard and D-pad input.
// Calls window.onPlayerMove(dx, dy) — defined in main.js.
// To add a new input method (gamepad, touch swipe): add it here.
// ============================================================

const KEY_MAP = {
  ArrowUp:    [0, -1],
  ArrowDown:  [0,  1],
  ArrowLeft:  [-1, 0],
  ArrowRight: [ 1, 0],
  w:          [0, -1],
  s:          [0,  1],
  a:          [-1, 0],
  d:          [ 1, 0],
  W:          [0, -1],
  S:          [0,  1],
  A:          [-1, 0],
  D:          [ 1, 0],
};

let lastMoveTime = 0;

function handleKeyDown(e) {
  const dir = KEY_MAP[e.key];
  if (!dir) return;
  e.preventDefault();

  const now = Date.now();
  if (now - lastMoveTime < MOVE_REPEAT_MS) return;
  lastMoveTime = now;

  if (typeof window.onPlayerMove === 'function') {
    window.onPlayerMove(dir[0], dir[1]);
  }
}

function initInput() {
  window.addEventListener('keydown', handleKeyDown);
  initDpad();
}

function teardownInput() {
  window.removeEventListener('keydown', handleKeyDown);
}

// ── D-Pad ─────────────────────────────────────────────────────

function initDpad() {
  const dpad = document.getElementById('dpad');
  if (!dpad) return;

  // Grid positions: [row, col] → [dx, dy]
  const buttons = [
    { row: 0, col: 1, label: '▲', dx:  0, dy: -1 },
    { row: 1, col: 0, label: '◀', dx: -1, dy:  0 },
    { row: 1, col: 2, label: '▶', dx:  1, dy:  0 },
    { row: 2, col: 1, label: '▼', dx:  0, dy:  1 },
  ];

  dpad.innerHTML = '';
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const btnDef = buttons.find(b => b.row === r && b.col === c);
      if (btnDef) {
        const btn = document.createElement('button');
        btn.className = 'btn-icon';
        btn.textContent = btnDef.label;
        btn.addEventListener('click', () => {
          if (typeof window.onPlayerMove === 'function') {
            window.onPlayerMove(btnDef.dx, btnDef.dy);
          }
        });
        dpad.appendChild(btn);
      } else {
        const blank = document.createElement('div');
        blank.className = 'dpad-blank';
        dpad.appendChild(blank);
      }
    }
  }
}
