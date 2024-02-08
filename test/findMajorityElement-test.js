import findMajorityElement from "../src/findMajorityElement.js";
import { expect } from 'chai';

describe('findMajorityElement', () => {
  it('should return the majority element', () => {
    const result = findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])
    expect(result).to.equal(4)
  })

  it('should return null when no majority element present', () => {
    const result = findMajorityElement([3, 3, 4, 2, 4, 4, 2, 4])
    expect(result).to.equal(null)
  })

})