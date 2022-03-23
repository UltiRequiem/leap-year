import { isLeapYear } from "./mod.ts";

isLeapYear(2014); //=> false
isLeapYear(2016); //=> true
isLeapYear("6 October 2006 00:07:00 GMT"); //=> false
isLeapYear("2000"); //=> false
isLeapYear(new Date(2016, 1, 1)); //=> true
isLeapYear("13 December 400 00:07:00 GMT", true); //=> { year: 400, result: true }
