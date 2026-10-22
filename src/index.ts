import { parseDateLike } from "./parse-date-like.js";

/**
 * Check if a year is a [leap year](https://en.wikipedia.org/wiki/Leap_year).
 *
 * @param year - Default: `new Date()`.
 *
 * @example
 * ```javascript
 * import { isLeapYear } from "@ultirequiem/leap-year";
 *
 * isLeapYear(2014); //=> false
 * isLeapYear(2016); //=> true
 * isLeapYear("6 October 2006 00:07:00 GMT") //=> false
 * isLeapYear("200"); //=> false
 * isLeapYear(new Date(2016, 1, 1)); //=> true
 * ```
 */
export function isLeapYear(year?: Date | string | number): boolean;
export function isLeapYear(
  year?: Date | string | number,
  returnValue?: boolean,
): { year: number; result: boolean };
export function isLeapYear(
  year: Date | string | number = new Date(),
  returnValue = false,
) {
  year = parseDateLike(year);

  const result = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return returnValue ? { result, year } : result;
}

/**
 * List every leap year in a range, both ends included.
 *
 * @param min - First year to check, defaults to `0`.
 * @param max - Last year to check, defaults to the current year.
 *
 * @example
 * ```javascript
 * import { leapYearsInRange } from "@ultirequiem/leap-year";
 *
 * leapYearsInRange(2000, 2020); //=> [2000, 2004, 2008, 2012, 2016, 2020]
 * ```
 */
export function leapYearsInRange(
  min: Date | string | number = 0,
  max: Date | string | number = new Date(),
): number[] {
  const maxYear = parseDateLike(max);
  const years: number[] = [];

  for (let year = parseDateLike(min); year <= maxYear; year++) {
    if (isLeapYear(year)) {
      years.push(year);
    }
  }

  return years;
}
