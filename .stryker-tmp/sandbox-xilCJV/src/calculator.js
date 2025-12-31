// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
const WEEKS_PER_YEAR = 52;
function yearlyEnergyCost({
  kwhPerUse,
  usesPerWeek
}, pricePerKwh) {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    return stryMutAct_9fa48("1") ? kwhPerUse * usesPerWeek * WEEKS_PER_YEAR / pricePerKwh : (stryCov_9fa48("1"), (stryMutAct_9fa48("2") ? kwhPerUse * usesPerWeek / WEEKS_PER_YEAR : (stryCov_9fa48("2"), (stryMutAct_9fa48("3") ? kwhPerUse / usesPerWeek : (stryCov_9fa48("3"), kwhPerUse * usesPerWeek)) * WEEKS_PER_YEAR)) * pricePerKwh);
  }
}
function totalCost(product, pricePerKwh, years) {
  if (stryMutAct_9fa48("4")) {
    {}
  } else {
    stryCov_9fa48("4");
    return stryMutAct_9fa48("5") ? product.purchasePrice - yearlyEnergyCost(product, pricePerKwh) * years : (stryCov_9fa48("5"), product.purchasePrice + (stryMutAct_9fa48("6") ? yearlyEnergyCost(product, pricePerKwh) / years : (stryCov_9fa48("6"), yearlyEnergyCost(product, pricePerKwh) * years)));
  }
}
function compareProducts(a, b, pricePerKwh, years) {
  if (stryMutAct_9fa48("7")) {
    {}
  } else {
    stryCov_9fa48("7");
    const aTotal = totalCost(a, pricePerKwh, years);
    const bTotal = totalCost(b, pricePerKwh, years);
    const cheaper = (stryMutAct_9fa48("11") ? aTotal > bTotal : stryMutAct_9fa48("10") ? aTotal < bTotal : stryMutAct_9fa48("9") ? false : stryMutAct_9fa48("8") ? true : (stryCov_9fa48("8", "9", "10", "11"), aTotal <= bTotal)) ? a.name : b.name;
    const diff = Math.abs(stryMutAct_9fa48("12") ? aTotal + bTotal : (stryCov_9fa48("12"), aTotal - bTotal));
    return stryMutAct_9fa48("13") ? {} : (stryCov_9fa48("13"), {
      aTotal,
      bTotal,
      cheaper,
      diff
    });
  }
}
function breakEvenYear(a, b, pricePerKwh, maxYears = 50) {
  if (stryMutAct_9fa48("14")) {
    {}
  } else {
    stryCov_9fa48("14");
    const diffAt = stryMutAct_9fa48("15") ? () => undefined : (stryCov_9fa48("15"), (() => {
      const diffAt = y => stryMutAct_9fa48("16") ? totalCost(a, pricePerKwh, y) + totalCost(b, pricePerKwh, y) : (stryCov_9fa48("16"), totalCost(a, pricePerKwh, y) - totalCost(b, pricePerKwh, y));
      return diffAt;
    })());
    let prev = diffAt(0);
    for (let year = 1; stryMutAct_9fa48("19") ? year > maxYears : stryMutAct_9fa48("18") ? year < maxYears : stryMutAct_9fa48("17") ? false : (stryCov_9fa48("17", "18", "19"), year <= maxYears); stryMutAct_9fa48("20") ? year -= 1 : (stryCov_9fa48("20"), year += 1)) {
      if (stryMutAct_9fa48("21")) {
        {}
      } else {
        stryCov_9fa48("21");
        const cur = diffAt(year);
        if (stryMutAct_9fa48("24") ? prev !== 0 : stryMutAct_9fa48("23") ? false : stryMutAct_9fa48("22") ? true : (stryCov_9fa48("22", "23", "24"), prev === 0)) return year;
        if (stryMutAct_9fa48("27") ? prev > 0 && cur < 0 && prev < 0 && cur > 0 : stryMutAct_9fa48("26") ? false : stryMutAct_9fa48("25") ? true : (stryCov_9fa48("25", "26", "27"), (stryMutAct_9fa48("29") ? prev > 0 || cur < 0 : stryMutAct_9fa48("28") ? false : (stryCov_9fa48("28", "29"), (stryMutAct_9fa48("32") ? prev <= 0 : stryMutAct_9fa48("31") ? prev >= 0 : stryMutAct_9fa48("30") ? true : (stryCov_9fa48("30", "31", "32"), prev > 0)) && (stryMutAct_9fa48("35") ? cur >= 0 : stryMutAct_9fa48("34") ? cur <= 0 : stryMutAct_9fa48("33") ? true : (stryCov_9fa48("33", "34", "35"), cur < 0)))) || (stryMutAct_9fa48("37") ? prev < 0 || cur > 0 : stryMutAct_9fa48("36") ? false : (stryCov_9fa48("36", "37"), (stryMutAct_9fa48("40") ? prev >= 0 : stryMutAct_9fa48("39") ? prev <= 0 : stryMutAct_9fa48("38") ? true : (stryCov_9fa48("38", "39", "40"), prev < 0)) && (stryMutAct_9fa48("43") ? cur <= 0 : stryMutAct_9fa48("42") ? cur >= 0 : stryMutAct_9fa48("41") ? true : (stryCov_9fa48("41", "42", "43"), cur > 0)))))) return year;
        prev = cur;
      }
    }
    return null;
  }
}
module.exports = stryMutAct_9fa48("44") ? {} : (stryCov_9fa48("44"), {
  yearlyEnergyCost,
  totalCost,
  compareProducts,
  breakEvenYear
});