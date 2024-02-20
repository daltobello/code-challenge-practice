
function countCharacterInstances(string) {
  let result = {}
  for(let i = 0; i < string.length; i++) {
    let char = string[i]
    console.log(char)
    if(result[char]) {
      result[char] += 1
    } else {
      result[char] = 1
    }
  }
  console.log('result', result)
  return result
}

export default countCharacterInstances

/**
 Develop a function that accepts a single string as its argument. The function should analyze the input string and produce an output in the form of an object. This object should contain key-value pairs where each key is a unique character from the input string, and the corresponding value is the count of occurrences of that character within the string. 
 
 Ensure your function accounts for all characters in the input, including whitespace and special characters.

 */


 /**
  GOAL: given any string, return an object with key value pairs for each character (a single letter) and the number of times (tally) it occurs in the string. 
  INPUT: string
  OUTPUT: object
  HOW: 
  - declare a result variable initialized to an empty object
  - iterate over the string
  - inside of the loop, assign a variable to hold the current string element. 
  - check if the result object has a key of the current char already. if it does, increment that key's value by 1
  - if the key does not exist, add it and assign the property value to 1.
  - return the result object outside of the loop
  */