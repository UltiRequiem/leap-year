/* eslint-disable no-param-reassign */

/**
 * @param {Number} [year=new Date()] Default is `new Date()`
 * @returns {boolean} Returns whether the year is a leap year or not
 */
function isLeapYear(year = new Date()) {
  if (!(year instanceof Date) && typeof year !== 'number') {
    throw new TypeError(
      `Expected "year" to be of type "Date" or "number" and got ${typeof year}.`
    );
  }

  year = year instanceof Date ? year.getFullYear() : year;
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

module.exports = isLeapYear;
