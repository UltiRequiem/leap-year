import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.15/node_support.ts";

buildPackage(
  {
    repoName: "@ultirequiem/leap-year",
    description: "Check if a year is leap.",
    homepage: "https://leap-year.js.org",
    keywords: ["leap", "year", "date"],
    version: "2.1.0",
  },
  {
    entryPoints: [
      "./mod.ts",
      { name: "leap-year", path: "./leap-year.ts", kind: "bin" },
    ],
  },
);
