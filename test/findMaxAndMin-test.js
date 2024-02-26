import findMaxAndMin from "../src/findMaxAndMin.js";
import { expect } from "chai"

describe("findMaxAndMin",() => {
  it("should return the maximum and minimum elements in an array", () => {
    const result = findMaxAndMin([3, 2, 6, 11, 24])
    expect(result).to.deep.equal([24, 2])
  })

  it("should return the maximum and minimum (including negative integers) elements in an array", () => {
    const result = findMaxAndMin([5, 4, -4, 75, 24])
    expect(result).to.deep.equal([75, -4])
  })
})