const { parseLines } = require("../src/io");

test("parseLines trims whitespace and removes empty lines", () => {
    const input = "  a  \n\n b \r\n   \n c  ";
    expect(parseLines(input)).toEqual(["a", "b", "c"]);
});

test("parseLines supports Windows newlines (CRLF)", () => {
    const input = "x\r\ny\r\n";
    expect(parseLines(input)).toEqual(["x", "y"]);
});