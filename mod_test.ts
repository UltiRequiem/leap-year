import { assert } from "https://deno.land/std@0.128.0/testing/asserts.ts";
import { isLeapYear } from "./mod.ts";

Deno.test("Invalid Input ", () => {});

Deno.test("Detects Leap Years", () => {
  console.log(isLeapYear(2014));
});

Deno.test("Detects Leap Years", () => {
  for (let i = 1890; i < 2030; ++i) {
    if (isLeapYear(i)) {
    }
  }
});
