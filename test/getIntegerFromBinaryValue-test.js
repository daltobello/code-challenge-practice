import getIntegerFromBinaryValue from "../src/getIntegerFromBinaryValue.js";
import { expect } from "chai";

describe("getIntegerFromBinaryValue", () => {
  it("should return the integer for a binary value", () => {
    const result = getIntegerFromBinaryValue([0, 0, 1, 0])
    expect(result).to.equal(2)
  })
})