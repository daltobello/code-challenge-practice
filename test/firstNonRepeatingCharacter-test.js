import firstNonRepeatingCharacter from "../src/firstNonRepeatingCharacter.js";
import { expect } from "chai";

describe("firstNonRepeatingCharacter", () => {
  it("should return 'w', the first non-repeating character", () => {
    const result = firstNonRepeatingCharacter("swiss")
    expect(result).to.equal("w")
  })

  it("should return, 'M' the first non-repeating character", () => {
    const result = firstNonRepeatingCharacter("Mississippi")
    expect(result).to.equal("M")
  })

  it("should return null when there is no non-repeating character", () => {
    const result = firstNonRepeatingCharacter("noon")
    expect(result).to.equal(null)
  })

  it("should return null when there the input is an empty string", () => {
    const result = firstNonRepeatingCharacter("")
    expect(result).to.equal(null)
  })

  it("should return the only character when the input is one letter", () => {
    const result = firstNonRepeatingCharacter("b")
    expect(result).to.equal("b")
  })
})