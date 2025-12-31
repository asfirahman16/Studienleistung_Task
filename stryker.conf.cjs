module.exports = {
    mutate: ["src/**/*.js", "!src/cli.js"],
    testRunner: "jest",
    reporters: ["clear-text", "html"],
    coverageAnalysis: "off",
    thresholds: {
        high: 80,
        low: 60,
        break: null // <-- don't fail the run
    },
    htmlReporter: {
        fileName: "artifacts/stryker/index.html"
    }
};