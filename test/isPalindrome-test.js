import isPalindrome from "../src/isPalindrome.js";
import { expect } from "chai"

describe('isPalindrome', () => {
  it("should return true when input string is a palindrome", () => {
    const result = isPalindrome("racecar")
    expect(result).to.equal(true)
  }) 

  it("should return false when input string is not a palindrome", () => {
    const result = isPalindrome("smorgasbord")
    expect(result).to.equal(false)
  }) 
})