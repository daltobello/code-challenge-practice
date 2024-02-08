function sumEvenNums(nums) {
  let counter = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      counter += nums[i]
    }
  }
  return counter
}

export default sumEvenNums

/*
Objective:
Write a function sumEvenNums that takes a list of integers and returns the sum of all the even numbers in the list.

Input: [1, 2, 3, 4, 5, 6]
Output: 12 (because 2 + 4 + 6 = 12)

Input: [17, 23, 81]
Output: 0 (because there are no even numbers)
*/