# Sounds

Drop audio files here (.mp3, .ogg, .wav).

When you're ready to add audio, install Howler.js:
1. Download howler.min.js and place it alongside your scripts
2. Add <script src="js/howler.min.js"></script> to index.html before main.js
3. Create js/audio.js with your sound definitions

Example:
```js
const Sounds = {
  hit:   new Howl({ src: ['assets/sounds/hit.ogg'] }),
  win:   new Howl({ src: ['assets/sounds/win.ogg'] }),
  step:  new Howl({ src: ['assets/sounds/step.ogg'], volume: 0.3 }),
};
```
Then call Sounds.hit.play() in combat.js when damage lands.
