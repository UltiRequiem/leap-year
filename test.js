const isLeapYear = require('./index');

console.log(isLeapYear());
console.log(isLeapYear(2024));
console.log(isLeapYear(new Date()));
console.log(isLeapYear(new Date('12-10-2024')));
// console.log(isLeapYear('12-10-24'));
