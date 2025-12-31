// @ts-nocheck
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const outPath = path.join(__dirname, "..", "artifacts", "scc.txt");


const res = spawnSync("scc", ["--format=table", "--by-file", "."], { encoding: "utf8" });

if (res.error) {
    fs.writeFileSync(
        outPath,
        "scc not found. Install it:\n- Windows: choco install scc\n- Or download from https://github.com/boyter/scc/releases\n",
        "utf8"
    );
    console.log("scc not found; wrote instructions to artifacts/scc.txt");
} else {
    fs.writeFileSync(outPath, res.stdout, "utf8");
    console.log("Wrote metrics to artifacts/scc.txt");
}