import { isLeapYear } from "./mod.ts";

Deno.test("Detects Leap Years", () => {
  console.log(isLeapYear(2014));
});
