import findMaxAndMin from "../src/findMaxAndMin.js";
import { expect } from "chai"

describe("findMaxAndMin",() => {
  it("should return the maximum and minimum element in an array", () => {
    const result = findMaxAndMin([3, 2, 6, 11, 24])
    expect(result).to.deep.equal([2, 24])
  })
})