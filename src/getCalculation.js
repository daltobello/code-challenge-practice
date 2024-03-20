function getCalculation(num1, operator, num2) {
  const operators = {
    "+": (a, b) => a + b, 
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => ( b !== 0 ? a / b : null)
  }

  const calculate = operators[operator]
  if(calculate) {
    return calculate(num1, num2)
  } else {
    return null
  }
}

export default getCalculation


// Do NOT write any code! Practice planning out how you would approach the following prompt. Your planning process should include thorough pseudocode.

/*
Prompt: Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. 

Notes: 
If the string is not one of the specified characters, the function should return null
You cannot divide by zero. If an attempt to divide by zero is made, return null
1- I need to write a function that takes 3 params, 
@params numbers and a string(operator)
if the second number is zero and operator is division then I should immediately return null. 
if operation is + I should return first number + second number 
if operation is - I should return first number - second number
---- etc... 
if in the end operator is non of the above than I need to ... 
Examples:

getCalculation(2,"+", 4); //--> 6
getCalculation(6,"-", 1.5); //--> 4.5
getCalculation(-4,"*", 8); //--> -32
getCalculation(49,"/", -7); //--> -7
getCalculation(8, 'f', 9); //--> null
getCalculation(4,"/",0) //--> null

if the operation is "/" and the second number is 0 the function should return null 

if the second param is something different than those operation the function should return null 

it looks like the function is taking 3 params 2 numbers and one string. 
the string is the operation it should be only these 4 "+,-* or / "
how do I handle the negetive numbers ?? This could be a good clarifying question. 
the function should either return a number or null if it meets those edge cases. 

params : number , string operation , number 
output : number 
edge cases : 


INPUT:  number , string operation , number 
OUTPUT: number
HOW: 
- 
*/

// function getCalculation(num1, operator, num2) {
//   if(operator === "+") {
//     return num1 + num2
//   } else if (operator === "-") {
//     return num1 - num2
//   } else if(operator === "*") {
//     return num1 * num2
//   } else if(operator === "/" && num2 !== 0) {
//     return num1 / num2
//   }
//   return null
// }

// export default getCalculation