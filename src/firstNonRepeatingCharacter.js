function firstNonRepeatingCharacter(str) {
  let characterCount = {}
  let counter = 1

  for(let i = 0; i < str.length; i++) {
    let char = str[i]
    if(characterCount[char]) {
      characterCount[char] = counter++
    } else {
      characterCount[char] = counter
    }
    console.log(characterCount)
  }

  for(let i = 0; i < str.length; i++) {
    let char = str[i]
    if(characterCount[char] === 1) {
      console.log("CHAR", char)
      return char
    }
  }

}

export default firstNonRepeatingCharacter

/*
GOAL: find the first character in the string that isn't repeated
INPUT DATA: string, a word
OUTPUT DATA: string, character(s)
HOW: 
- loop over the string and for each indexed character
  - add the current character to an object key and the counts as the value
  - loop through the string again to find the character with a count of 1
  - return that character
 */