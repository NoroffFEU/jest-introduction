const { add } = require("../src/functions");

describe("The add function", () => {
  it("Checks if Add function exists", () => {
    expect(add).toBeDefined();
  });

  it("Adds 2 + 2 to equal 4", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("Adds 2 + 2 to NOT equal 5", () => {
    expect(add(2, 2)).not.toBe(5);
  });
});
