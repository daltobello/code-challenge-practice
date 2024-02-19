import countCharacterOccurances from "../src/countCharacterOccurances";
import chai from "chai";

describe('countCharacterOccurances', () => {
  it('should return the an object with the count of each letter', () => {
    const result = countCharacterOccurances("hello world")
    expect(result).to.equal({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1
    })
  })

  })