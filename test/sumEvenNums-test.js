import sumEvenNums from "../src/sumEvenNums.js";
import { expect } from 'chai';

describe('sumEvenNums', () => {
  it('should add only even numbers', () => {
    const result = sumEvenNums([1, 2, 3, 4, 5, 6])
    expect(result).to.equal(12)
  })

  it('should return 0 since there are no even numbers', () => {
    const result = sumEvenNums([17, 23, 81])
    expect(result).to.equal(0)
  })
})