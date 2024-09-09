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
})