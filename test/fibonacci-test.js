import fibonacci from "../src/fibonacci.js";
import { expect } from "chai";

describe('fibonacci', () => {
  it('should returns the 0th number in the Fibonacci sequence', () => {
    const result = fibonacci(0)
    expect(result).to.equal(0)
  })

  it('should returns the 4th number in the Fibonacci sequence', () => {
    const result = fibonacci(4)
    expect(result).to.equal(3)
  })

  it('should returns the 7th number in the Fibonacci sequence', () => {
    const result = fibonacci(7)
    expect(result).to.equal(13)
  })
})