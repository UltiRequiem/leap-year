import { isLeapYear } from "./mod.ts";

import {
  assert,
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.128.0/testing/asserts.ts";

Deno.test("Main", () => {
  assertEquals(typeof isLeapYear(), "boolean");

  assert(isLeapYear(2000));
  assert(isLeapYear(2020));
  assert(isLeapYear(2016));

  assert(isLeapYear(400));

  // My birthday :D
  assert(!isLeapYear("6 October 2006 00:07:00 GMT"));
});

Deno.test("Handles Invalid Input", () => {
  assertThrows(() => {
    // @ts-ignore It should throw an error
    isLeapYear([]);
    // @ts-ignore It should throw an error
    isLeapYear(new Blob());
  });
});
