import findVowels from "../src/findVowels.js";
import { expect } from "chai"

describe("findVowels", () => {
  it("should return a list of vowels present in the string 'mellow'", () => {
    const result = findVowels("mellow")
    expect(result).to.deep.equal(["e", "o"])
  })
  it("should return a list of vowels present in the string 'sloop'", () => {
    const result = findVowels("sloop")
    expect(result).to.deep.equal(["o", "o"])
  })
})