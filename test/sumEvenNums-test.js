import sumEvenNums from "../src/sumEvenNums";
import { expect } from 'chai';

describe('sum even numbers', () => {
  it('should add only even numbers', () => {
    const result = sumEvenNums([1, 2, 3, 4, 5, 6])
    expect(result).to.equal(12)
  })
})