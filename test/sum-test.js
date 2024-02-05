import sum from '../src/sum.js'
import { expect } from 'chai';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    const result = sum(1,2)
    expect(result).to.equal(3, '1 + 2 should equal 3')
  })

  it('should correctly add two negative numbers', () => {
    const result = sum(-1,-2)
    expect(result).to.equal(-3, '-1 + (-2) should equal -3')
  })
})