import firstNonRepeatingCharacter from "../src/firstNonRepeatingCharacter.js";
import { expect } from "chai";

describe("firstNonRepeatingCharacter", () => {
  it.should("return the first non-repeating character", () => {
    const result = firstNonRepeatingCharacter("swiss")
    expect(result).to.equal("w")
  })
})