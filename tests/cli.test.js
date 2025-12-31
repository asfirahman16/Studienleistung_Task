const { spawnSync } = require("child_process");
const path = require("path");

test("CLI prints output", () => {
    const cliPath = path.join(__dirname, "..", "src", "cli.js");
    const input = [
        "0.40",
        "10",
        "Washer A",
        "300",
        "1.2",
        "5",
        "Washer B",
        "450",
        "0.8",
        "5",
        ""
    ].join("\n");

    const res = spawnSync("node", [cliPath], { input, encoding: "utf8" });
    expect(res.status).toBe(0);
    expect(res.stdout).toContain("=== Appliance Cost Comparison ===");
    expect(res.stdout).toContain("Cheaper after 10 years:");
});