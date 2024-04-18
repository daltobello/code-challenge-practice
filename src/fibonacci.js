function fibonacci(n) {
  if(n === 0 ) {
    return 0
  } else if(n === 1) {
    return 1
  }

  let prevPrev = 0
  let prev = 1
  let current = 0

  for(let i = 2; i <= n; i++) {
    current = prev + prevPrev
    prevPrev = prev
    prev = current
  }
  return current
}

export default fibonacci




/*
Write a function that takes a number n as input and returns the nth number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1. For example, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

Your function should adhere to the following requirements:

It should take a single parameter n, which represents the position of the number in the Fibonacci sequence (starting from 0).
It should return the nth number in the Fibonacci sequence.

GOAL: return the value of the Fibonacci sequence at position n (the number that is input into the function) when the function is called.

in the fibonacci sequence, each number is the sum of the two preceding numbers, so keep track of the previous two numbers to generate the next num in the sequence. 

INPUT: number
OUTPUT: number
HOW: 

handle the base case: the first two numbers in the fibonacci sequence are 0 and 1.
    - if the number is equal to 0 return 0
    - if the number is equal to 1 return 1
otherwise: keep track of the previous two numbers with variables that get reassigned.
    - we can initialize a variable prevPrev at 0 (1st number in sequence) for the first of two previous numbers 
    - then we initialize a variable prev (2nd number in sequence) at 1 for the number preceding the current number
    - a "current" variable will store the current number and should be initalized at 0.

    - now iterate starting from the third fibonacci number (index 2) up to the nth fibonacci number. "i"will equal 2 initially.
    - during the iteration of the loop, these variables are updated to represent the preceding numbers for the next calculation.

   - add the previous two numbers (prev + prevPrev). 
   - then, update the values of prevPrev and prev to prepare for the next iteration.


*/

