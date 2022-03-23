import { parseDateLike } from "https://deno.land/x/parse_datelike@0.0.1/mod.ts";

/**
 * Check if a year is a [leap year](https://en.wikipedia.org/wiki/Leap_year).
 *
 * @param year - Default: `new Date()`.
 *
 * @example
 * ```javascript
 * import { isLeapYear } from "https://deno.land/x/leap_year/mod.ts";
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
