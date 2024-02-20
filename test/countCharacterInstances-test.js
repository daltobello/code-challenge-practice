import countCharacterInstances from "../src/countCharacterInstances.js"
import { expect } from "chai";

describe('countCharacterInstances', () => {
  it('should return an object with the count of each letter', () => {
    const result = countCharacterInstances("hello world")
    expect(result).to.deep.equal({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
      space: 1
    })
  })
  })