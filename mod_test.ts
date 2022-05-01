import { isLeapYear } from "./mod.ts";

import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("Main", () => {
  assertEquals(typeof isLeapYear(), "boolean");

  assertEquals(isLeapYear(2022, true), { year: 2022, result: false });

  assert(isLeapYear(2000));
  assert(isLeapYear(2020));
  assert(isLeapYear(2016));

  assert(isLeapYear(400));

  // My birthday :D
  assert(!isLeapYear("13 October 2006 00:07:00 GMT"));
});

Deno.test("Handles Invalid Input", () => {
  assertThrows(() => {
    // @ts-ignore It should throw an error
    isLeapYear([]);
    // @ts-ignore It should throw an error
    isLeapYear(new Blob());
    // @ts-ignore It should throw an error
    isLeapYear(Symbol());
  }, TypeError);
});

Deno.test("Test with Strings", () => {
  assertEquals(isLeapYear("2000"), true);
  assertEquals(isLeapYear("1900"), false);
  assertEquals(isLeapYear("2100"), false);
  assertEquals(isLeapYear("2400"), true);
  assertEquals(isLeapYear("2401"), false);
  assertEquals(isLeapYear("2402"), false);
  assertEquals(isLeapYear("2403"), false);
  assertEquals(isLeapYear("2404"), true);
  assertEquals(isLeapYear("2405"), false);
  assertEquals(isLeapYear("2406"), false);
  assertEquals(isLeapYear("2407"), false);
  assertEquals(isLeapYear("2408"), true);
  assertEquals(isLeapYear("2409"), false);
  assertEquals(isLeapYear("2410"), false);
  assertEquals(isLeapYear("2411"), false);
  assertEquals(isLeapYear("2412"), true);
  assertEquals(isLeapYear("2413"), false);
  assertEquals(isLeapYear("2414"), false);
  assertEquals(isLeapYear("2415"), false);
  assertEquals(isLeapYear("2416"), true);
  assertEquals(isLeapYear("2417"), false);
  assertEquals(isLeapYear("2418"), false);
  assertEquals(isLeapYear("2419"), false);
  assertEquals(isLeapYear("2420"), true);
  assertEquals(isLeapYear("2421"), false);
  assertEquals(isLeapYear("2422"), false);
  assertEquals(isLeapYear("2423"), false);
  assertEquals(isLeapYear("2424"), true);
  assertEquals(isLeapYear("2425"), false);
  assertEquals(isLeapYear("2426"), false);
  assertEquals(isLeapYear("2427"), false);
});

Deno.test("Numbers", () => {
  assertEquals(isLeapYear(2000), true);
  assertEquals(isLeapYear(1900), false);
  assertEquals(isLeapYear(2100), false);
  assertEquals(isLeapYear(2400), true);
  assertEquals(isLeapYear(2401), false);
  assertEquals(isLeapYear(2402), false);
  assertEquals(isLeapYear(2403), false);
  assertEquals(isLeapYear(2404), true);
  assertEquals(isLeapYear(2405), false);
  assertEquals(isLeapYear(2406), false);
  assertEquals(isLeapYear(2407), false);
  assertEquals(isLeapYear(2408), true);
  assertEquals(isLeapYear(2409), false);
  assertEquals(isLeapYear(2410), false);
  assertEquals(isLeapYear(2411), false);
  assertEquals(isLeapYear(2412), true);
  assertEquals(isLeapYear(2413), false);
  assertEquals(isLeapYear(2414), false);
  assertEquals(isLeapYear(2415), false);
  assertEquals(isLeapYear(2416), true);
  assertEquals(isLeapYear(2417), false);
  assertEquals(isLeapYear(2418), false);
  assertEquals(isLeapYear(2419), false);
  assertEquals(isLeapYear(2420), true);
  assertEquals(isLeapYear(2421), false);
  assertEquals(isLeapYear(2422), false);
  assertEquals(isLeapYear(2423), false);
  assertEquals(isLeapYear(2424), true);
  assertEquals(isLeapYear(2425), false);
  assertEquals(isLeapYear(2426), false);
  assertEquals(isLeapYear(2427), false);
});

Deno.test("Test with Dates", () => {
  assertEquals(isLeapYear(new Date("2000")), true);
  assertEquals(isLeapYear(new Date("1900")), false);
  assertEquals(isLeapYear(new Date("2100")), false);
  assertEquals(isLeapYear(new Date("2400")), true);
  assertEquals(isLeapYear(new Date("2401")), false);
  assertEquals(isLeapYear(new Date("2402")), false);
  assertEquals(isLeapYear(new Date("2403")), false);
  assertEquals(isLeapYear(new Date("2404")), true);
  assertEquals(isLeapYear(new Date("2405")), false);
  assertEquals(isLeapYear(new Date("2406")), false);
  assertEquals(isLeapYear(new Date("2407")), false);
  assertEquals(isLeapYear(new Date("2408")), true);
  assertEquals(isLeapYear(new Date("2409")), false);
  assertEquals(isLeapYear(new Date("2410")), false);
  assertEquals(isLeapYear(new Date("2411")), false);
  assertEquals(isLeapYear(new Date("2412")), true);
  assertEquals(isLeapYear(new Date("2413")), false);
  assertEquals(isLeapYear(new Date("2414")), false);
  assertEquals(isLeapYear(new Date("2415")), false);
  assertEquals(isLeapYear(new Date("2416")), true);
  assertEquals(isLeapYear(new Date("2417")), false);
  assertEquals(isLeapYear(new Date("2418")), false);
  assertEquals(isLeapYear(new Date("2419")), false);
  assertEquals(isLeapYear(new Date("2420")), true);
  assertEquals(isLeapYear(new Date("2421")), false);
  assertEquals(isLeapYear(new Date("2422")), false);
  assertEquals(isLeapYear(new Date("2423")), false);
  assertEquals(isLeapYear(new Date("2424")), true);
  assertEquals(isLeapYear(new Date("2425")), false);
  assertEquals(isLeapYear(new Date("2426")), false);
  assertEquals(isLeapYear(new Date("2427")), false);
});
