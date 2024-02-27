<h1 style='display: flex; flex-flow: column; justify-content: center; align-items: center'>
  <img src="https://raw.githubusercontent.com/MarioMH8/scryfall-api/next/.idea/icon.svg" alt="Scryfall logo" style="max-width: 4rem">
  scryfall-api
</h1>

<p align="center">
  A Javascript library for <a href='https://scryfall.com/docs/api' target='_blank'>scryfall.com</a> written in Typescript.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/scryfall-api" rel="nofollow">
        <img src="https://camo.githubusercontent.com/a172c58fbefc7103cb230b872119a85914a463f32958ea9e4e1f3ad9d7e1a100/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7363727966616c6c2d6170693f7374796c653d666c61742d737175617265" alt="npm" data-canonical-src="https://img.shields.io/npm/v/scryfall-api?style=flat-square" style="max-width: 100%;">
    </a>
    <a href="https://github.com/MarioMH8/scryfall-api">
        <img src="https://camo.githubusercontent.com/93378eea577b6b00f04b1fbfa5dc6871778ff3f6b4de76833a6211d35770f6c4/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6973737565732f6d6172696f6d68382f7363727966616c6c2d6170693f7374796c653d666c61742d737175617265" alt="GitHub issues" data-canonical-src="https://img.shields.io/github/issues/mariomh8/scryfall-api?style=flat-square" style="max-width: 100%;">
    </a>
</p>

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
- [Contributing](#contributing)

## Installation

```bash
npm install --save scryfall-api
```

**Using bun**

```bash
bun add scryfall-api
```

## Documentation

In the documentation below, requiring the package is assumed.

```js
import scryfall from 'scryfall-api';
```


**With CommonJS**

```js
const scryfall = require('scryfall-api');
```

**If you only need Cards**

```js
import { Cards } from 'scryfall-api';
```

Link to [full documentation.](./DOCUMENTATION.md)

## Contributing

This project uses [Bun](https://bun.sh) as a runtime, test runner and bundler.

Thanks for wanting to help out! Here's the setup you'll have to do:

Clone the project

```bash
git clone git@github.com:MarioMH8/scryfall-api.git
```

Go to the project directory

```bash
cd scryfall-api
```

Install dependencies

```bash
bun install
```

Compile the project

```bash
bun run build
```

## MIT License

[Copyright 2021-2024 MarioMH](./LICENSE)
