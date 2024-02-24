import isAnagram from "../src/isAnagram.js";
import { expect } from "chai";

describe("isAnagram", () => {
  it("should return true when two input strings are anagrams of each other.", () => {
    const result = isAnagram("earth", "heart");
    expect(result).to.equal(true);
  });
});
