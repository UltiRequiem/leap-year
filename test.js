import isLeapYear from './index.js'

console.log(isLeapYear());
console.log(isLeapYear(2024));
console.log(isLeapYear(new Date()));
console.log(isLeapYear(new Date('12-10-2024')));

// This dont work ->
// console.log(isLeapYear('12-10-24'));
// You need console.log(isLeapYear(new Date('12-10-24')))
