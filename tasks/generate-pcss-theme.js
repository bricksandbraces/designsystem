"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var theme_1 = require("../src/theme");
var output = ":root {\n";
Object.keys(theme_1["default"].light).forEach(function (key) {
    output += "\t--" + key + ": " + theme_1["default"][key] + ";\n";
});
output += "}\n\n";
output += "@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t\n";
Object.keys(theme_1["default"].dark).forEach(function (key) {
    output += "\t--" + key + ": " + theme_1["default"][key] + ";\n";
});
output += "\n\t}\n}\n";
(0, fs_1.writeFileSync)("../src/styles/themes.pcss", output);
