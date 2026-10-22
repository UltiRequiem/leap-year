import { describe, expect, it } from "vitest";
import { leapYearsInRange } from "./index.js";

describe("leapYearsInRange", () => {
  it("includes both ends of the range", () => {
    expect(leapYearsInRange(2000, 2020)).toEqual([
      2000, 2004, 2008, 2012, 2016, 2020,
    ]);
  });

  it("skips century years that are not divisible by 400", () => {
    expect(leapYearsInRange(1896, 1904)).toEqual([1896, 1904]);
  });

  it("accepts strings and dates", () => {
    expect(leapYearsInRange("2010", new Date(Date.UTC(2017, 5, 1)))).toEqual([
      2012, 2016,
    ]);
  });

  it("is empty when min is after max", () => {
    expect(leapYearsInRange(2020, 2000)).toEqual([]);
  });

  it("defaults to everything up to the current year", () => {
    const years = leapYearsInRange();

    expect(years[0]).toBe(0);
    expect(years.at(-1)).toBeLessThanOrEqual(new Date().getUTCFullYear());
  });
});
