function findMaxAndMin(nums) {
  let max = nums[0];
  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return [max, min];
}

export default findMaxAndMin;

/**
 Given an array of integers, find the maximum and minimum elements in the array.
Input: [3, 2, 6, 11, 24]
Output: [2, 24]

GOAL: find the min and max numbers in an array and return them in a new array
INPUT: array of integers
OUTPUT: array of two integers
HOW: 
- declare max and min variables and set the initial values to the first element in the nums array (to serve as a starting point).
- loop over the nums array, checking if each element is greater than the value of the max variable. 
    - if it is, reassign the value of the max variable to that element
- also check if each element is less than the value of the min variable.
    - if it is, reassign the value of the min variable to that element
  - after the loop finishes, return the max and min variables inside an array to match the data type the test is expecting
 */