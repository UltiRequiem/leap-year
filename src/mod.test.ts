import { expect, it } from "vitest";
import { isLeapYear } from "./index.js";

it("Main", () => {
  expect(typeof isLeapYear()).toEqual("boolean");

  expect(isLeapYear(2022, true)).toEqual({ year: 2022, result: false });

  expect(isLeapYear(2000)).toBeTruthy();
  expect(isLeapYear(2020)).toBeTruthy();
  expect(isLeapYear(2016)).toBeTruthy();

  expect(isLeapYear(400)).toBeTruthy();

  // My birthday :D
  expect(!isLeapYear("13 October 2006 00:07:00 GMT")).toBeTruthy();
});

it("Handles Invalid Input", () => {
  expect(() => {
    // @ts-ignore It should throw an error
    isLeapYear([]);
    // @ts-ignore It should throw an error
    isLeapYear(new Blob());
    // @ts-ignore It should throw an error
    isLeapYear(Symbol());
  }).toThrow(TypeError);
});

it("Test with Strings", () => {
  expect(isLeapYear("2000")).toEqual(true);
  expect(isLeapYear("1900")).toEqual(false);
  expect(isLeapYear("2100")).toEqual(false);
  expect(isLeapYear("2400")).toEqual(true);
  expect(isLeapYear("2401")).toEqual(false);
  expect(isLeapYear("2402")).toEqual(false);
  expect(isLeapYear("2403")).toEqual(false);
  expect(isLeapYear("2404")).toEqual(true);
  expect(isLeapYear("2405")).toEqual(false);
  expect(isLeapYear("2406")).toEqual(false);
  expect(isLeapYear("2407")).toEqual(false);
  expect(isLeapYear("2408")).toEqual(true);
  expect(isLeapYear("2409")).toEqual(false);
  expect(isLeapYear("2410")).toEqual(false);
  expect(isLeapYear("2411")).toEqual(false);
  expect(isLeapYear("2412")).toEqual(true);
  expect(isLeapYear("2413")).toEqual(false);
  expect(isLeapYear("2414")).toEqual(false);
  expect(isLeapYear("2415")).toEqual(false);
  expect(isLeapYear("2416")).toEqual(true);
  expect(isLeapYear("2417")).toEqual(false);
  expect(isLeapYear("2418")).toEqual(false);
  expect(isLeapYear("2419")).toEqual(false);
  expect(isLeapYear("2420")).toEqual(true);
  expect(isLeapYear("2421")).toEqual(false);
  expect(isLeapYear("2422")).toEqual(false);
  expect(isLeapYear("2423")).toEqual(false);
  expect(isLeapYear("2424")).toEqual(true);
  expect(isLeapYear("2425")).toEqual(false);
  expect(isLeapYear("2426")).toEqual(false);
  expect(isLeapYear("2427")).toEqual(false);
});

it("Numbers", () => {
  expect(isLeapYear(2000)).toEqual(true);
  expect(isLeapYear(1900)).toEqual(false);
  expect(isLeapYear(2100)).toEqual(false);
  expect(isLeapYear(2400)).toEqual(true);
  expect(isLeapYear(2401)).toEqual(false);
  expect(isLeapYear(2402)).toEqual(false);
  expect(isLeapYear(2403)).toEqual(false);
  expect(isLeapYear(2404)).toEqual(true);
  expect(isLeapYear(2405)).toEqual(false);
  expect(isLeapYear(2406)).toEqual(false);
  expect(isLeapYear(2407)).toEqual(false);
  expect(isLeapYear(2408)).toEqual(true);
  expect(isLeapYear(2409)).toEqual(false);
  expect(isLeapYear(2410)).toEqual(false);
  expect(isLeapYear(2411)).toEqual(false);
  expect(isLeapYear(2412)).toEqual(true);
  expect(isLeapYear(2413)).toEqual(false);
  expect(isLeapYear(2414)).toEqual(false);
  expect(isLeapYear(2415)).toEqual(false);
  expect(isLeapYear(2416)).toEqual(true);
  expect(isLeapYear(2417)).toEqual(false);
  expect(isLeapYear(2418)).toEqual(false);
  expect(isLeapYear(2419)).toEqual(false);
  expect(isLeapYear(2420)).toEqual(true);
  expect(isLeapYear(2421)).toEqual(false);
  expect(isLeapYear(2422)).toEqual(false);
  expect(isLeapYear(2423)).toEqual(false);
  expect(isLeapYear(2424)).toEqual(true);
  expect(isLeapYear(2425)).toEqual(false);
  expect(isLeapYear(2426)).toEqual(false);
  expect(isLeapYear(2427)).toEqual(false);
});

it("Test with Dates", () => {
  expect(isLeapYear(new Date("2000"))).toEqual(true);
  expect(isLeapYear(new Date("1900"))).toEqual(false);
  expect(isLeapYear(new Date("2100"))).toEqual(false);
  expect(isLeapYear(new Date("2400"))).toEqual(true);
  expect(isLeapYear(new Date("2401"))).toEqual(false);
  expect(isLeapYear(new Date("2402"))).toEqual(false);
  expect(isLeapYear(new Date("2403"))).toEqual(false);
  expect(isLeapYear(new Date("2404"))).toEqual(true);
  expect(isLeapYear(new Date("2405"))).toEqual(false);
  expect(isLeapYear(new Date("2406"))).toEqual(false);
  expect(isLeapYear(new Date("2407"))).toEqual(false);
  expect(isLeapYear(new Date("2408"))).toEqual(true);
  expect(isLeapYear(new Date("2409"))).toEqual(false);
  expect(isLeapYear(new Date("2410"))).toEqual(false);
  expect(isLeapYear(new Date("2411"))).toEqual(false);
  expect(isLeapYear(new Date("2412"))).toEqual(true);
  expect(isLeapYear(new Date("2413"))).toEqual(false);
  expect(isLeapYear(new Date("2414"))).toEqual(false);
  expect(isLeapYear(new Date("2415"))).toEqual(false);
  expect(isLeapYear(new Date("2416"))).toEqual(true);
  expect(isLeapYear(new Date("2417"))).toEqual(false);
  expect(isLeapYear(new Date("2418"))).toEqual(false);
  expect(isLeapYear(new Date("2419"))).toEqual(false);
  expect(isLeapYear(new Date("2420"))).toEqual(true);
  expect(isLeapYear(new Date("2421"))).toEqual(false);
  expect(isLeapYear(new Date("2422"))).toEqual(false);
  expect(isLeapYear(new Date("2423"))).toEqual(false);
  expect(isLeapYear(new Date("2424"))).toEqual(true);
  expect(isLeapYear(new Date("2425"))).toEqual(false);
  expect(isLeapYear(new Date("2426"))).toEqual(false);
  expect(isLeapYear(new Date("2427"))).toEqual(false);
});
