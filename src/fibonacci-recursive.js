function fibonacciRecursive(n) {
  if(n === 0) {
    return 0
  } else if(n === 1) {
    return 1
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)

  // call the function again and add an argument to minus 1 from n for the previous number 

  // then add this value to another function call with n - 2 (for the number preceding the previous number)
}

export default fibonacciRecursive

/*
Write a function that takes a number n as input and returns the nth number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1. For example, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

INPUT: number
OUTPUT: number
HOW: 
recursive approach: 
- establish the base case
- keep track of the previous two numbers 
- fibonacciRecursive calls itself recursively twice, each time with n decremented by 1 or 2 until it reaches one or both of the base cases (n = 0 and n = 1).

ChatGPT Explanation:
The recursive calls represent the sum of the previous two Fibonacci numbers. So, fibonacciRecursive(n - 1) represents the Fibonacci number preceding the current one, and fibonacciRecursive(n - 2) represents the Fibonacci number two steps before the current one. The sum of these two recursive calls gives the current Fibonacci number.

The recursion continues until it reaches one of the base cases (n = 0 or n = 1). At that point, the recursion stops, and the base case value is returned.

*/


