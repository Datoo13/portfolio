# Sprites

Drop PNG sprite sheets or individual sprites here.

To wire them up, edit `js/renderer.js`:
- `playerContent()` — returns the player tile HTML
- `enemyContent(enemy)` — returns enemy tile HTML (enemy.id is the sprite key)
- `tileContent(tileType)` — returns floor/wall/exit/shrine tile HTML

Example swap:
```js
function playerContent() {
  return '<img src="assets/sprites/player.png" width="20" height="20">';
}
```
