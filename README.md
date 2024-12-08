![banner.png](.idea%2Fbanner.png)

<h1 align="center">
  scryfall-api
</h1>

<p align="center">
  A Javascript library for <a href='https://scryfall.com/docs/api' target='_blank'>scryfall.com</a> written in Typescript.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/scryfall-api" rel="nofollow">
        <img src="https://img.shields.io/npm/v/scryfall-api?style=flat-square" alt="npm" style="max-width: 100%;">
    </a>
    <a href="https://github.com/MarioMH8/scryfall-api">
        <img src="https://img.shields.io/github/issues/mariomh8/scryfall-api?style=flat-square" alt="GitHub issues" style="max-width: 100%;">
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

```ts
import scryfall from 'scryfall-api';

scryfall.Cards.byName('Black Lotus').then(console.log);
```

**With CommonJS**

```js
const scryfall = require('scryfall-api');

scryfall.Cards.byName('Black Lotus').then(console.log);
```

**If you only need Cards**

```ts
import { Cards } from 'scryfall-api';

Cards.byName('Black Lotus').then(console.log);
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
