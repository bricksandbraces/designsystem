import { generateVisiblePagesArray } from "./paginationUtilities";

describe("paginationUtilities - Show maximum pages", () => {
  // 1

  it("solves j", () => {
    expect(generateVisiblePagesArray(1, 1, 0)).toEqual([0]);
  });

  // 2

  it("solves j x", () => {
    expect(generateVisiblePagesArray(2, 2, 0)).toEqual([0, 1]);
  });

  it("solves x j", () => {
    expect(generateVisiblePagesArray(2, 2, 1)).toEqual([0, 1]);
  });

  // 3

  it("solves x j x", () => {
    expect(generateVisiblePagesArray(3, 3, 1)).toEqual([0, 1, 2]);
  });

  it("solves j x x", () => {
    expect(generateVisiblePagesArray(3, 3, 0)).toEqual([0, 1, 2]);
  });

  it("solves x x j", () => {
    expect(generateVisiblePagesArray(3, 3, 2)).toEqual([0, 1, 2]);
  });

  // 4

  it("solves j x x x", () => {
    expect(generateVisiblePagesArray(4, 4, 0)).toEqual([0, 1, 2, 3]);
  });

  it("solves x j x x", () => {
    expect(generateVisiblePagesArray(4, 4, 1)).toEqual([0, 1, 2, 3]);
  });

  it("solves x x j x", () => {
    expect(generateVisiblePagesArray(4, 4, 2)).toEqual([0, 1, 2, 3]);
  });

  it("solves x x x j", () => {
    expect(generateVisiblePagesArray(4, 4, 3)).toEqual([0, 1, 2, 3]);
  });
});

describe("paginationUtilities - Show single page", () => {
  it("solves j", () => {
    expect(generateVisiblePagesArray(1, 1, 0)).toEqual([0]);
  });
  it("solves j _", () => {
    expect(generateVisiblePagesArray(2, 1, 0)).toEqual([0]);
  });
  it("solves _ j _", () => {
    expect(generateVisiblePagesArray(3, 1, 1)).toEqual([1]);
  });
  it("solves _ _ _ j", () => {
    expect(generateVisiblePagesArray(4, 1, 3)).toEqual([3]);
  });
});

describe("paginationUtilities - Show even partial", () => {
  it("solves _ j x", () => {
    expect(generateVisiblePagesArray(3, 2, 1)).toEqual([1, 2]);
  });

  it("solves j x _", () => {
    expect(generateVisiblePagesArray(3, 2, 0)).toEqual([0, 1]);
  });

  it("solves _ j x _", () => {
    expect(generateVisiblePagesArray(4, 2, 1)).toEqual([1, 2]);
  });

  it("solves _ x j x x _ _", () => {
    expect(generateVisiblePagesArray(7, 4, 2)).toEqual([1, 2, 3, 4]);
  });

  it("solves x j x x _ _", () => {
    expect(generateVisiblePagesArray(6, 4, 1)).toEqual([0, 1, 2, 3]);
  });

  it("solves j x x x _ _", () => {
    expect(generateVisiblePagesArray(6, 4, 0)).toEqual([0, 1, 2, 3]);
  });

  it("solves _ _ x x x j", () => {
    expect(generateVisiblePagesArray(6, 4, 5)).toEqual([2, 3, 4, 5]);
  });

  it("solves _ _ x x x x j x", () => {
    expect(generateVisiblePagesArray(8, 6, 6)).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it("solves _ _ x x j x x x _", () => {
    expect(generateVisiblePagesArray(9, 6, 4)).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it("solves _ _ _ _ x j x x", () => {
    expect(generateVisiblePagesArray(8, 4, 5)).toEqual([4, 5, 6, 7]);
  });

  it("solves _ _ _ _ x x j x", () => {
    expect(generateVisiblePagesArray(8, 4, 6)).toEqual([4, 5, 6, 7]);
  });

  it("solves _ _ _ _ x x x j", () => {
    expect(generateVisiblePagesArray(8, 4, 7)).toEqual([4, 5, 6, 7]);
  });
});

describe("paginationUtilities - Show odd partial", () => {
  it("solves _ x j x _", () => {
    expect(generateVisiblePagesArray(5, 3, 2)).toEqual([1, 2, 3]);
  });

  it("solves x j x _", () => {
    expect(generateVisiblePagesArray(4, 3, 1)).toEqual([0, 1, 2]);
  });

  it("solves _ x j x", () => {
    expect(generateVisiblePagesArray(4, 3, 2)).toEqual([1, 2, 3]);
  });

  it("solves _ x x j", () => {
    expect(generateVisiblePagesArray(4, 3, 3)).toEqual([1, 2, 3]);
  });

  it("solves j x x _", () => {
    expect(generateVisiblePagesArray(4, 3, 0)).toEqual([0, 1, 2]);
  });

  it("solves _ _ x x j x x _", () => {
    expect(generateVisiblePagesArray(8, 5, 4)).toEqual([2, 3, 4, 5, 6]);
  });

  it("solves _ x x j x x", () => {
    expect(generateVisiblePagesArray(6, 5, 3)).toEqual([1, 2, 3, 4, 5]);
  });

  it("solves _ x x x j x", () => {
    expect(generateVisiblePagesArray(6, 5, 4)).toEqual([1, 2, 3, 4, 5]);
  });

  it("solves x x j x x _", () => {
    expect(generateVisiblePagesArray(6, 5, 2)).toEqual([0, 1, 2, 3, 4]);
  });

  it("solves x j x x x _", () => {
    expect(generateVisiblePagesArray(6, 5, 1)).toEqual([0, 1, 2, 3, 4]);
  });

  it("solves j x x x x _", () => {
    expect(generateVisiblePagesArray(6, 5, 0)).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("paginationUtilities - Edge cases", () => {
  it("handles error cases", () => {
    expect(() => generateVisiblePagesArray(1, 2, 0)).toThrowError();
    expect(() => generateVisiblePagesArray(1, 2, 1)).toThrowError();
    expect(() => generateVisiblePagesArray(1, 1, -1)).toThrowError();
  });
});
