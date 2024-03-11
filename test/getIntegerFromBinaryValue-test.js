import getIntegerFromBinaryValue from "../src/getIntegerFromBinaryValue.js";
import { expect } from "chai";

describe("getIntegerFromBinaryValue", () => {
  it("should return the integer of 2 for the given binary value", () => {
    const result = getIntegerFromBinaryValue([0, 0, 1, 0])
    expect(result).to.equal(2)
  })
  it("should return the integer of 5 for the given binary value", () => {
    const result = getIntegerFromBinaryValue([0, 1, 0, 1])
    expect(result).to.equal(5)
  })
})