import convertToHexspeak from "../src/convertToHexspeak.js";
import { expect } from "chai";

describe('convertToHexspeak', () => {
  it('should return return the hexspeak representation of that number if it exists', () => {
    const result = convertToHexspeak(257)
    expect(result).to.equal('AF')
  })
})