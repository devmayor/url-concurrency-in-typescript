import { splitter } from "../helpers/common";

describe("Testing splitter function", () => {
  test("It should split an array into chunks successfully based on the divider", () => {
    const result = splitter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3);
    expect(result.length).toBe(4);
    expect(result).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]]);
  });
  test("It should split an array into chunks successfully based on the divider 1", () => {
    const result = splitter([1, 2, 3], 1);
    expect(result.length).toBe(3);
    expect(result).toStrictEqual([[1], [2], [3]]);
  });

  test("It should return an empty array when its sent an empty list", () => {
    const result = splitter([], 3);
    expect(result.length).toBe(0);
  });
  test("It should throw an error when 0 divider is sent", () => {
    expect(() => {
      splitter([1, 2, 3, 4, 5, 6, 7], 0);
    }).toThrow("Array cannot be divided by 0 or less");
  });
});
