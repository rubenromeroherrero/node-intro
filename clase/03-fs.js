const fs = require("fs");

const pkg = fs.readFileSync("./package.json");
const transformedPkg = pkg.toString("utf-8").replace("batman", "codehouse");

fs.writeFileSync("./package.json", transformedPkg);
