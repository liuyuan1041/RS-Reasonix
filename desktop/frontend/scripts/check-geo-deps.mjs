// Check that geo-specific dependencies are present after upstream merges.
import { readFileSync } from "fs";
const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const geoDeps = ["ol"];
for (const dep of geoDeps) {
  if (!pkg.dependencies[dep]) {
    console.error(`ERROR: geo dependency "${dep}" is missing from package.json`);
    process.exit(1);
  }
}
console.log("Geo deps OK:", geoDeps.join(", "));
