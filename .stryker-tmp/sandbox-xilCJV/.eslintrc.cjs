// @ts-nocheck
module.exports = {
    env: { node: true, es2022: true, jest: true },
    extends: ["eslint:recommended", "plugin:sonarjs/recommended"],
    plugins: ["sonarjs"],
    rules: {
        "no-console": "off"
    }
};