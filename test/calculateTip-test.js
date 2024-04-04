import calculateTip from "../src/calculateTip.js";
import { expect } from 'chai'

describe('calculateTp', () => {
  it('should calculate the total bill per person based on a 20% tip and 2 people', () => {
    const result = calculateTip(135, 20, 2)
    expect(result).to.equal(81)
  })

  it('should calculate the total bill per person based on a 35% tip and 3 people', () => {
    const result = calculateTip(461, 35, 3)
    expect(result).to.equal(207.45)
  })

  it('should calculate the total bill per person based on a 15% tip and 1 people', () => {
    const result = calculateTip(45, 15, 1)
    expect(result).to.equal(51.75)
  })

  it('should return an error message because there must be at least 1 person', () => {
    const result = calculateTip(200, 25, 0)
    expect(result).to.equal('Please provide valid numbers for bill amount, tip percentage, and number of people.')
  })

})