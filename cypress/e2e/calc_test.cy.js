function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

describe("Unit test for math function", () => {
  // context works as alias of describe
  context("math", () => {
    it("can add numbers", () => {
      expect(add(5, 7)).to.eq(12);
    });

    // specify works exactly like it command
    specify("can subtract numbers", () => {
      expect(subtract(5, 2)).to.eq(3);
    });
  });
});
