function findMajorityElement(nums) {
  let counter = 0
  let candidate = null
  for(let i = 0; i < nums.length; i++) {
    if(counter === 0) {
      candidate = nums[i]
      counter = 1
    } else if(nums[i] === candidate){
      counter ++
    } else {
      counter --
    }
  }

  let occurrence = 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === candidate) {
      occurrence ++
    }
  }
  
  if(occurrence > nums.length / 2) {
    return candidate
  } else {
    return null
  }
}

export default findMajorityElement

/*
Write a function findMajorityElement that takes an array of integers 
and returns the element that appears more than n/2 times in the array, 
where n is the size of the array. If there is no such element, the function should return null.

Input: [3, 3, 4, 2, 4, 4, 2, 4, 4]
Output: 4 (because 4 appears 5 times which is more than 9/2 times)

GOAL: 
find an element that appears more times than half of the length of the array

HOW: 
- initialize counter variable and assign value to 0
- initialize candidate variable





Known: 
iterate over the array.
get the length of the array and divide that in half
compare this number to the number of times an element occurs
    check does a given number occur more than half of the 
is the length of the array / 2  less than 

*/