# isLeapYear

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> This package was done for
> [UltiRequiem/leap-year-api](https://github.com/UltiRequiem/leap-year-api).

## Install

```bash
npm install check-leap-year
```

Or use a CDN service:

- [UNPKG](https://unpkg.com/check-leap-year/index.js)
- [GitHub](https://raw.githubusercontent.com/UltiRequiem/check-leap-year/main/index.js)
- [Deno Land](https://deno.land/x/check_leap_year/index.js)

## Usage

You can see examples of use in [test.js](./test.js)

```javascript
import isLeapYear from "check-leap0year";

console.log(isLeapYear());
console.log(isLeapYear(2024));
console.log(isLeapYear(new Date()));
console.log(isLeapYear(new Date("12-10-2024")));
console.log(isLeapYear("12-10-2024"));
```

## Licence

Released under the MIT Licence.
