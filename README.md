# Raf
RequestAnimationFrame utilities

[→ Documentation](https://flunch.github.io/raf/docs) |
[→ Example](https://flunch.github.io/raf)

<br><br>

## Requirements
- ES6 Modules support
  - Using a module bundler like Webpack, Rollup or Parcel
  - [Native support from browser](https://caniuse.com/#feat=es6-module)
  - From NodeJS
- [window.requestAnimationFrame()](https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame)

<br>

## Features
- RAF Singleton with high resolution delta time (if supported)
  - Autostop & autostart requestAnimationFrame when adding/removing function
  - `setBefore` & `setAfter` methods to add function at the beginning and the end of the raf call
- fps limiter
- RAF-based timer Class

<br>

## Module Installation

```sh
# using npm
$ npm install --save @flunch/raf

# or using yarn
$ yarn add @flunch/raf
```

<br>

## Usage

##### Core
```js
import raf from '@flunch/raf'

function tick (dt) {
  console.log('called on new frame')
}

raf.add(tick)
```

##### Using other utilities
```js
import { raf, fpsLimiter } from '@flunch/raf'

function tick (dt) {
  console.log('Called at a framerate of 10fps')
}

raf.add(fpsLimiter(10, tick))
```

<br>

## Documentation
Full documentation available from https://flunch.github.io/raf/docs

<br>

## License
[MIT.](LICENSE)