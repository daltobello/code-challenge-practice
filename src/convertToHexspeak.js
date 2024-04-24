function convertToHexspeak(decimalNum) {
  console.log(decimalNum)

}

export default convertToHexspeak

/*
Problem: Hexspeak is a way of writing numbers using the hexadecimal system but allowing only the letters A, B, C, D, E, and F. For example, the decimal number 257 can be written as 101 in hexadecimal, but in hexspeak, it would be written as AF because A is 10 and F is 15 in hexadecimal.

Write a function that takes a non-negative integer as input and returns the hexspeak representation of that number if it exists. If the number cannot be represented in hexspeak, return "ERROR".

Example:

Input: 257
Output: "AF"
Input: 3
Output: "ERROR"
Input: 16
Output: "IO"

INPUT: integer
OUTPUT: hexspeak string or the string "ERROR" if the input can't be represented in hexspeak
HOW: 
in hexadecimal notation, the digits 0 through 9 represent values 0 through 9 respectively, and the letters A through F represent values 10 through 15 respectively.

divide decimalNum by 16 

*/