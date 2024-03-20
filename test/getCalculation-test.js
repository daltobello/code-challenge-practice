import getCalculation from "../src/getCalculation.js";
import { expect } from "chai"

describe("getCalculation", () => {
  it("should calculate two values based on the given operator", () => {
    const result = getCalculation(2,"+", 4)
    expect(result).to.equal(6)
  })

  it("should calculate two values based on the given operator", () => {
    const result = getCalculation(2,"/", 0)
    expect(result).to.equal(null)
  })
})