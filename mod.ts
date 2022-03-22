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
export function isLeapYear(year: DateLike = new Date()) {
  year = internalParse(year);

  return (year % 4 === 0 && year % 100 !== 0) ?? year % 400 === 0;
}

export function generateLeapYear(config: { min?: number; max?: DateLike }) {
  const { min = 0, max = new Date() } = config;

  const maxYear = internalParse(max);

  const leapYears = [];

  for (let year = min; year <= maxYear; year++) {
    if (isLeapYear(year)) {
      leapYears.push(year);
    }
  }

  return leapYears;
}

export type DateLike = Date | number | string;

function internalParse(date: DateLike) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  if (!(date instanceof Date) && typeof date !== "number") {
    throw new TypeError(
      `Expected "year" type to be "Date" | "number" | "string" and got ${typeof date}.`
    );
  }

  return date instanceof Date ? date.getUTCFullYear() : date;
}
