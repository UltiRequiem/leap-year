import { parse } from "https://deno.land/std@0.146.0/flags/mod.ts";

import { isLeapYear } from "./mod.ts";

const { _: years, verbose } = parse(Deno.args, {
  boolean: ["verbose"],
  alias: { v: "verbose" },
});

for (const year of years) {
  const { year: parsedYear, result } = isLeapYear(year, true);

  if (verbose) {
    console.log(`${parsedYear} is ${result ? "" : "not "}a leap year.`);

    continue;
  }

  console.log(result);
}
