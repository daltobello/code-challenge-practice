import isPalindrome from "../src/isPalindrome.js";
import { expect } from "chai"

describe('isPalindrome', () => {
  it("should return true if input string is a palindrome and false if not", () => {
    const result = isPalindrome("racecar")
    expect(result).to.equal(true)
  }) 
})