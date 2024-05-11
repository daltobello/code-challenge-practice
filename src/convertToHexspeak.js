function convertToHexspeak(num) {
  console.log(num)
  const hexspeak = {
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15
};

const hexDigits = num.toString(16).toUpperCase(); // convert to hexadecimal and uppercase

for (let i = 0; i < hexDigits.length; i++) {
    const digit = hexDigits[i];
    if (!(digit in hexspeak || digit === '0' || digit === '1')) {
        return "ERROR";
    }
}

// replace any occurrence of 0 with O and 1 with I
const hexConverted = hexDigits.replace(/0/g, 'O').replace(/1/g, 'I');
return hexConverted;
}

// NOT SOLVED: returning "IOI" not "AF"
// come back this this when fresh.

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

divide num by 16 

*/