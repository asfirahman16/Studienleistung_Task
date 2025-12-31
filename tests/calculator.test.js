const {
    yearlyEnergyCost,
    totalCost,
    compareProducts,
    breakEvenYear,
} = require("../src/calculator");

test("yearlyEnergyCost computes expected value", () => {
    const p = { kwhPerUse: 1, usesPerWeek: 5 };
    expect(yearlyEnergyCost(p, 0.5)).toBe(1 * 5 * 52 * 0.5);
});

test("totalCost adds purchase + energy", () => {
    const p = { purchasePrice: 200, kwhPerUse: 2, usesPerWeek: 1 };
    expect(totalCost(p, 0.25, 3)).toBe(200 + (2 * 1 * 52 * 0.25) * 3);
});

test("compareProducts chooses cheaper", () => {
    const a = { name: "A", purchasePrice: 100, kwhPerUse: 2.0, usesPerWeek: 5 };
    const b = { name: "B", purchasePrice: 400, kwhPerUse: 0.5, usesPerWeek: 5 };

    const res = compareProducts(a, b, 0.4, 10);
    expect(res.cheaper).toBe("B");
});

test("breakEvenYear returns year or null", () => {
    const a = { name: "A", purchasePrice: 100, kwhPerUse: 2.0, usesPerWeek: 5 };
    const b = { name: "B", purchasePrice: 400, kwhPerUse: 0.5, usesPerWeek: 5 };
    const year = breakEvenYear(a, b, 0.4, 50);
    expect(year).not.toBeNull();
});