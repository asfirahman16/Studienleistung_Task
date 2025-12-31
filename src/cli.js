const readline = require("readline");
const { compareProducts, breakEvenYear } = require("./calculator");

function readLines(count) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout, // still STDOUT, ok for CLI
            terminal: false,
        });

        const lines = [];
        rl.on("line", (line) => {
            const trimmed = String(line).trim();
            if (trimmed.length === 0) return; // ignore empty lines
            lines.push(trimmed);

            if (lines.length === count) {
                rl.close();
                resolve(lines);
            }
        });

        rl.on("close", () => {

            if (lines.length > 0) resolve(lines);
        });
    });
}

async function main() {

    const lines = await readLines(10);

    let i = 0;
    const pricePerKwh = Number(lines[i++]);
    const years = Number(lines[i++]);

    const a = {
        name: lines[i++],
        purchasePrice: Number(lines[i++]),
        kwhPerUse: Number(lines[i++]),
        usesPerWeek: Number(lines[i++]),
    };

    const b = {
        name: lines[i++],
        purchasePrice: Number(lines[i++]),
        kwhPerUse: Number(lines[i++]),
        usesPerWeek: Number(lines[i++]),
    };

    const { aTotal, bTotal, cheaper, diff } = compareProducts(a, b, pricePerKwh, years);
    const be = breakEvenYear(a, b, pricePerKwh);

    console.log("=== Appliance Cost Comparison ===");
    console.log(`Electricity price (€/kWh): ${pricePerKwh.toFixed(4)}`);
    console.log(`Horizon (years): ${years}`);
    console.log("");

    console.log(`Product A: ${a.name}`);
    console.log(`  Purchase (€): ${a.purchasePrice.toFixed(2)}`);
    console.log(`  kWh per use: ${a.kwhPerUse.toFixed(3)}`);
    console.log(`  Uses per week: ${a.usesPerWeek.toFixed(2)}`);
    console.log(`  Total over ${years} years (€): ${aTotal.toFixed(2)}`);
    console.log("");

    console.log(`Product B: ${b.name}`);
    console.log(`  Purchase (€): ${b.purchasePrice.toFixed(2)}`);
    console.log(`  kWh per use: ${b.kwhPerUse.toFixed(3)}`);
    console.log(`  Uses per week: ${b.usesPerWeek.toFixed(2)}`);
    console.log(`  Total over ${years} years (€): ${bTotal.toFixed(2)}`);
    console.log("");

    console.log(`Cheaper after ${years} years: ${cheaper}`);
    console.log(`Absolute difference (€): ${diff.toFixed(2)}`);
    console.log(be === null ? "Break-even year: none (within 50 years)" : `Break-even year: year ${be}`);
}

module.exports = { main };

if (require.main === module) {
    main();
}