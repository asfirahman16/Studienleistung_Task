const WEEKS_PER_YEAR = 52;

function yearlyEnergyCost({ kwhPerUse, usesPerWeek }, pricePerKwh) {
    return kwhPerUse * usesPerWeek * WEEKS_PER_YEAR * pricePerKwh;
}

function totalCost(product, pricePerKwh, years) {
    return product.purchasePrice + yearlyEnergyCost(product, pricePerKwh) * years;
}

function compareProducts(a, b, pricePerKwh, years) {
    const aTotal = totalCost(a, pricePerKwh, years);
    const bTotal = totalCost(b, pricePerKwh, years);

    const cheaper = aTotal <= bTotal ? a.name : b.name;
    const diff = Math.abs(aTotal - bTotal);

    return { aTotal, bTotal, cheaper, diff };
}

function breakEvenYear(a, b, pricePerKwh, maxYears = 50) {

    const diffAt = (y) => totalCost(a, pricePerKwh, y) - totalCost(b, pricePerKwh, y);

    let prev = diffAt(0);
    for (let year = 1; year <= maxYears; year += 1) {
        const cur = diffAt(year);

        if (prev === 0) return year;
        if ((prev > 0 && cur < 0) || (prev < 0 && cur > 0)) return year;

        prev = cur;
    }
    return null;
}

module.exports = {
    yearlyEnergyCost,
    totalCost,
    compareProducts,
    breakEvenYear,
};