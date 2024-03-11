function getIntegerFromBinaryValue(binaryValues) {
  let result = 0
 for(let i = 0; i < binaryValues.length; i++) {
  result = result * 2 + binaryValues[i]
 }
 return result
}

export default getIntegerFromBinaryValue

/*
# Given an array of ones and zeroes, convert the equivalent binary value to an integer.
# Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
# Examples:
# Testing: [0, 0, 0, 1] ==> 1
# Testing: [0, 1, 0, 1] ==> 5
# However, the arrays can have varying lengths, not just limited to 4.
*/

/*
GOAL: convert an array of 1s and 0s into the equivalent integer value.
INPUT: array of 1s and 0s that is any length
OUTPUT: a number
HOW:
- the second digit (1) represents 2 to the power of 1, which is 2
- the first, third, and fourth digits are all 0, so they don't contribute anything.
-  [0, 0, 1, 0] ==> 2

- initialize a variable result to 0. this variable will store the integer value of the binary number.
- loop over the array of binary values
    - for each binary value, multiple the current value of  the result variable by 2. 
    - this effectively shifts the existing value of result one place to the left, which is equivalent to multiplying it by 2 in binary.
    - add the current element of the array (either 0 or 1) to result. this updates result based on the binary value of the current element.
    - return the final value of result, which represents the integer equivalent of the binary number.
 */