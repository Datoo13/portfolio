// ============================================================
// dungeon.js
// Procedural dungeon generation.
// Produces: grid, rooms, playerStart, enemies, shrines.
// ============================================================

// ── Grid helpers ────────────────────────────────────────────

function makeGrid() {
  return Array.from({ length: GRID_SIZE }, () =>
    Array(GRID_SIZE).fill(TILE.WALL)
  );
}

function carveRoom(grid, x, y, w, h) {
  for (let ry = y; ry < y + h; ry++) {
    for (let rx = x; rx < x + w; rx++) {
      if (ry >= 0 && ry < GRID_SIZE && rx >= 0 && rx < GRID_SIZE) {
        grid[ry][rx] = TILE.FLOOR;
      }
    }
  }
}

function carveCorridor(grid, x1, y1, x2, y2) {
  let cx = x1, cy = y1;
  while (cx !== x2) {
    if (cy >= 0 && cy < GRID_SIZE && cx >= 0 && cx < GRID_SIZE)
      grid[cy][cx] = TILE.CORRIDOR;
    cx += cx < x2 ? 1 : -1;
  }
  while (cy !== y2) {
    if (cy >= 0 && cy < GRID_SIZE && cx >= 0 && cx < GRID_SIZE)
      grid[cy][cx] = TILE.CORRIDOR;
    cy += cy < y2 ? 1 : -1;
  }
}

function roomsOverlap(a, b) {
  return (
    a.x < b.x + b.w + 1 && a.x + a.w > b.x - 1 &&
    a.y < b.y + b.h + 1 && a.y + a.h > b.y - 1
  );
}

// ── FOG OF WAR ──────────────────────────────────────────────

function computeVisible(pos) {
  const visible = new Set();
  const r = FOG_RADIUS;
  for (let dy = -r; dy <= r; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      if (dx * dx + dy * dy > r * r) continue;
      const nx = pos.x + dx, ny = pos.y + dy;
      if (nx >= 0 && ny >= 0 && nx < GRID_SIZE && ny < GRID_SIZE) {
        visible.add(`${nx},${ny}`);
      }
    }
  }
  return visible;
}

// ── MAIN GENERATOR ──────────────────────────────────────────

function generateDungeon(floor) {
  const grid  = makeGrid();
  const rooms = [];

  // Place rooms
  for (let i = 0; i < DUNGEON.ROOM_ATTEMPTS; i++) {
    const w = DUNGEON.ROOM_MIN_W + Math.floor(Math.random() * (DUNGEON.ROOM_MAX_W - DUNGEON.ROOM_MIN_W));
    const h = DUNGEON.ROOM_MIN_H + Math.floor(Math.random() * (DUNGEON.ROOM_MAX_H - DUNGEON.ROOM_MIN_H));
    const x = 1 + Math.floor(Math.random() * (GRID_SIZE - w - 2));
    const y = 1 + Math.floor(Math.random() * (GRID_SIZE - h - 2));
    const candidate = { x, y, w, h };

    if (rooms.some(r => roomsOverlap(candidate, r))) continue;

    carveRoom(grid, x, y, w, h);

    if (rooms.length > 0) {
      const prev = rooms[rooms.length - 1];
      carveCorridor(
        grid,
        Math.floor(prev.x + prev.w / 2), Math.floor(prev.y + prev.h / 2),
        Math.floor(x + w / 2),           Math.floor(y + h / 2)
      );
    }

    rooms.push({
      x, y, w, h,
      cx: Math.floor(x + w / 2),
      cy: Math.floor(y + h / 2),
    });
  }

  // Player starts in the centre of the first room
  const startRoom = rooms[0];
  const playerStart = { x: startRoom.cx, y: startRoom.cy };

  // Exit tile in the last room
  const exitRoom = rooms[rooms.length - 1];
  grid[exitRoom.cy][exitRoom.cx] = TILE.EXIT;

  // ── Shrines ─────────────────────────────────────────────
  const shrineCount = DUNGEON.SHRINE_MIN +
    Math.floor(Math.random() * (DUNGEON.SHRINE_MAX - DUNGEON.SHRINE_MIN + 1));
  const midRooms = rooms.slice(1, rooms.length - 1);

  for (let s = 0; s < shrineCount && midRooms.length > 0; s++) {
    const room = midRooms[Math.floor(Math.random() * midRooms.length)];
    const sx = room.x + 1 + Math.floor(Math.random() * (room.w - 2));
    const sy = room.y + 1 + Math.floor(Math.random() * (room.h - 2));
    if (grid[sy][sx] === TILE.FLOOR) {
      grid[sy][sx] = TILE.SHRINE;
    }
  }

  // ── Enemies ──────────────────────────────────────────────
  const enemies = [];
  const maxPerRoom = DUNGEON.ENEMIES_PER_ROOM_BASE +
    Math.floor(floor / DUNGEON.ENEMIES_SCALE_EVERY);

  rooms.slice(1, rooms.length - 1).forEach((room, roomIdx) => {
    const count = 1 + Math.floor(Math.random() * maxPerRoom);
    for (let e = 0; e < count; e++) {
      const ex = room.x + 1 + Math.floor(Math.random() * Math.max(1, room.w - 2));
      const ey = room.y + 1 + Math.floor(Math.random() * Math.max(1, room.h - 2));
      const type = getRandomEnemy(floor);
      enemies.push({
        uid:   `e_${roomIdx}_${e}_${Math.random().toString(36).slice(2)}`,
        alive: true,
        x:     ex,
        y:     ey,
        ...type,
      });
    }
  });

  // Boss in the last room (not on the exit tile)
  const bossType = getRandomBoss(floor);
  enemies.push({
    uid:   `boss_${floor}`,
    alive: true,
    x:     exitRoom.cx,
    y:     exitRoom.cy - 2 < exitRoom.y ? exitRoom.cy : exitRoom.cy - 2,
    ...bossType,
  });

  return {
    grid,
    rooms,
    playerStart,
    enemies,
  };
}
