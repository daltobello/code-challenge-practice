import updateNum from "../src/updateNum.js";
import { expect } from "chai";

describe('updateNum', () => {
  it('should return a number between 6 and 7', () => {
    const result = updateNum(2)
    expect(result).to.be.greaterThan(6)
    expect(result).to.be.lessThan(7)
  })
})