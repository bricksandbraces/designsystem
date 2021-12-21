import { writeFileSync } from "fs";
import theme from "../src/theme";

let output = ":root {\n";

Object.keys(theme.light).forEach((key) => {
  output += "\t--" + key + ": " + theme[key] + ";\n";
});

output += "}\n\n";
output += "@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t\n";

Object.keys(theme.dark).forEach((key) => {
  output += "\t--" + key + ": " + theme[key] + ";\n";
});

output += "\n\t}\n}\n";

writeFileSync("../src/styles/themes.pcss", output);
