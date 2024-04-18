import fibonacciRecursive from "../src/fibonacci-recursive.js";
import { expect } from "chai";

describe('fibonacciRecursive', () => {
  it('should returns the 8th number in the Fibonacci sequence', () => {
    const result = fibonacciRecursive(8)
    expect(result).to.equal(21)
  })
})