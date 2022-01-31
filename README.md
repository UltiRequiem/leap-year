# isLeapYear

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

This package was done for
[UltiRequiem/leap-year-api](https://github.com/UltiRequiem/leap-year-api).

![Cover](./assets/cover.jpg)

## Installation and Usage

```bash
npm install check-leap-year
```

You can see an example of use in [test.js](./test.js)

```javascript
import isLeapYear from "check-leap0year";

console.log(isLeapYear());
console.log(isLeapYear(2024));
console.log(isLeapYear(new Date()));
console.log(isLeapYear(new Date("12-10-2024")));
console.log(isLeapYear("12-10-2024"));
```

Or use the CDN:

- [UNPKG](https://unpkg.com/check-leap-year/index.js)
- [GitHub](https://raw.githubusercontent.com/UltiRequiem/check-leap-year/main/index.js)

## Licence

Released under the MIT Licence.
