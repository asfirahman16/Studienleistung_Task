// @ts-nocheck
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


test("compareProducts tie-break: if totals equal, A is chosen (<= not <)", () => {
    const a = { name: "A", purchasePrice: 100, kwhPerUse: 1, usesPerWeek: 1 };
    const b = { name: "B", purchasePrice: 100, kwhPerUse: 1, usesPerWeek: 1 };

    const res = compareProducts(a, b, 0.5, 10);
    expect(res.cheaper).toBe("A");
    expect(res.diff).toBe(0);
});

test("compareProducts diff is absolute difference (not sum)", () => {
    const a = { name: "A", purchasePrice: 100, kwhPerUse: 1, usesPerWeek: 1 };
    const b = { name: "B", purchasePrice: 200, kwhPerUse: 1, usesPerWeek: 1 };

    const res = compareProducts(a, b, 0, 1);
    expect(res.aTotal).toBe(100);
    expect(res.bTotal).toBe(200);
    expect(res.diff).toBe(100);
});

test("breakEvenYear returns the first year where costs flip", () => {
    const a = { name: "A", purchasePrice: 0, kwhPerUse: 10, usesPerWeek: 1 };
    const b = { name: "B", purchasePrice: 300, kwhPerUse: 0, usesPerWeek: 1 };


    expect(breakEvenYear(a, b, 1, 10)).toBe(1);
});