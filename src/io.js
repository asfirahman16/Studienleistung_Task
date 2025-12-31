function parseLines(input) {
    return input
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
}

module.exports = { parseLines };