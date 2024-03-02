function findDivisibleNumbers(nums, divisor) {

  const divisibleNumbers = nums.reduce((acc, num) => {
    if(num % divisor === 0) {
      acc.push(num)
    }
    return acc
  }, [])
  return divisibleNumbers
}

export default findDivisibleNumbers

/**
Prompt: 
Identify numbers divisible by a specified value: Write a function that accepts two parameters and identifies all numbers from the first parameter array that are divisible by the second parameter (the divisor).
Example:
Input: [1, 2, 3, 4, 5, 6],
Output: For divisor 2, the result is [2, 4, 6].
 */

/*
GOAL: given an array of numbers and a divisor number (second param), write a function that returns a new array of the numbers that are divisible by the second param.
INPUT: first param is an array of integers and second param is a single integer
OUTPUT: a new array of all numbers divisible by the second param.
QUESTIONS: 
- whole numbers only? 
- will the input array ever include negative numbers?
HOW: 
- loop over the nums array
- check if each element can be divided by the divisor number without a remainder
    - if so, add that number to a result array
    - otherwise, do nothing
    - return the result array
*/

// function findDivisibleNumbers(nums, divisor) {
//   let result = []
//   for(let i = 0; i < nums.length; i++) {
//     let num = nums[i]
//     console.log(num)
//     if(num % divisor === 0) {
//       result.push(num)
//     }
//   }
//   console.log(result)
//   return result
// }