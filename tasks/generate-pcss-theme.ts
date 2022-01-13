import fs from "fs";
import { defaultTheme as importedTheme } from "../src/theme";

let output =
  "/** DO NOT MODIFY! This file has been auto-generated from task:generate-pcss-theme.\nFor changing, consolidate src/theme.ts and rerun the task. */\n\n:root {\n";

Object.keys(importedTheme.light).forEach((key) => {
  output += "  --" + key + ": " + (importedTheme.light as any)[key] + ";\n";
});

output += "}\n\n";
output += "@media (prefers-color-scheme: dark) {\n  :root {\n";

Object.keys(importedTheme.dark).forEach((key) => {
  output += "    --" + key + ": " + (importedTheme.dark as any)[key] + ";\n";
});

output += "\n  }\n}\n";

console.log(output);

fs.writeFileSync(__dirname + "/../src/styles/theme.pcss", output);
console.log("Successfully generated ./src/styles/theme.pcss");
