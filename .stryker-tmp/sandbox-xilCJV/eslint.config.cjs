// @ts-nocheck
const js = require("@eslint/js");
const sonarjs = require("eslint-plugin-sonarjs");
const globals = require("globals");

module.exports = [
    js.configs.recommended,


    {
        files: ["src/**/*.js", "scripts/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                ...globals.node,
            },
        },
        plugins: { sonarjs },
        rules: {
            "no-console": "off",
        },
    },


    {
        files: ["tests/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        plugins: { sonarjs },
        rules: {
            "no-console": "off",
        },
    },
];