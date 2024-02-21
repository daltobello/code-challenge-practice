import countCharacterInstances from "../src/countCharacterInstances.js"
import { expect } from "chai";

describe('countCharacterInstances', () => {
  it('should return an object with the count of each letter in "hello world"', () => {
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

  
  it('should return an object with the count of each character in "$bling-ring$"', () => {
    const result = countCharacterInstances("$bling-ring$")
    expect(result).to.deep.equal({
      b: 1,
      l: 1,
      i: 2,
      n: 2,
      g: 2,
      "-": 1,
      r: 1,
      "$": 2,
    })
  })

  it('should return an object with the count of each character in "New York dork"', () => {
    const result = countCharacterInstances("New York dork")
    expect(result).to.deep.equal({
      n: 1,
      e: 1,
      w: 1,
      y: 1,
      o: 2,
      r: 2,
      k: 2,
      d: 1,
      space: 2
    })
  })
  })