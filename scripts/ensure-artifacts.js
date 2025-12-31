const fs = require("fs");
const path = require("path");

function ensureDir(p) {
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(path.join(__dirname, "..", "artifacts"));
ensureDir(path.join(__dirname, "..", "artifacts", "coverage"));
ensureDir(path.join(__dirname, "..", "artifacts", "stryker"));

fs.writeFileSync(path.join(__dirname, "..", "artifacts", "build.txt"), "build ok\n", "utf8");
console.log("Artifacts folder ready.");