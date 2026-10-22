# leap-year

[![Code Coverage](https://codecov.io/gh/ultirequiem/leap-year/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/leap-year)

Check if a year is a [leap year](https://en.wikipedia.org/wiki/Leap_year),
that's a calendar year that contains an additional day added to keep the
calendar year synchronized with the astronomical year or seasonal year.

## Usage

ESM only: the same import works in Node.js, Bun and browsers.

```javascript
import { isLeapYear } from "@ultirequiem/leap-year";

isLeapYear(2014); //=> false
isLeapYear(2016); //=> true
isLeapYear("6 October 2006 00:07:00 GMT"); //=> false
isLeapYear("2000"); //=> false
isLeapYear(new Date(2016, 1, 1)); //=> true
isLeapYear("13 December 400 00:07:00 GMT", true); //=> { year: 400, result: true }
```

## Related

- [leap_year_utils](https://github.com/UltiRequiem/leap_year_utils): Utilities
  around this package.

- [parse_datelike](https://github.com/UltiRequiem/parse_datelike): Parse a
  number/string/date to a number/string/date.

- [leap-year-api](https://github.com/UltiRequiem/leap-year-api): A REST API to
  know if a year is leap or not.

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/leap-year/tags) 🏷️

## Licence

Licensed under the MIT License 📄
