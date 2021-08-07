# isLeapYear

This package was done for [UltiRequiem/leap-year-api](https://github.com/UltiRequiem/leap-year-api).

![Cover](./assets/cover.jpg)

## Installation and Usage

```bash
npm i check-leap-year
```

You can see an example of use in [test.js](./test.js)

```javascript
const isLeapYear = require('check-leap-year');

console.log(isLeapYear());
console.log(isLeapYear(2024));
console.log(isLeapYear(new Date()));
console.log(isLeapYear(new Date('12-10-2024')));
```

Or use the CDN:

- [UNPKG](https://unpkg.com/check-leap-year@1.2.0/index.js)
- [GitHub](https://raw.githubusercontent.com/UltiRequiem/check-leap-year/main/index.js)
