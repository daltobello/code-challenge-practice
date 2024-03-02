import findDivisibleNumbers from "../src/findDivisibleNumbers.js";
import { expect } from "chai";

describe("findDivisibleNumbers", () => {
  it("should return all numbers from the input array that are divisible by the second parameter", () => {
    const result = findDivisibleNumbers([1, 2, 3, 4, 5, 6], 2)
    expect(result).to.deep.equal([2, 4, 6])
  })
})