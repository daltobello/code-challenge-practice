function findVowels(word) {
  const allVowels = ["a", "e", "i", "o", "u", "y"]
  const vowels = []
  for(let i = 0; i < word.length; i++) {
    if(allVowels.includes(word[i])) {
      vowels.push(word[i])
    } 
  }
  return vowels
}

export default findVowels

/*
Write a function that takes a string as input and returns a list of all the vowels present in the string. Assume that the input string contains only lowercase letters.
*/

/*
GOAL: find all the vowels in a string and return them in a list (array)
INPUT: string (all lowercase)
OUTPUT: array containing 
HOW:
- declare a variable that stores all possible vowels (a, e, i, o, u, y)
- iterate over the word and check if the variable storing all the vowels has the current character in it. if it does, then it must be a vowel and that character/vowel can be added to a new array.
- after the loop finished, we can return that new array storing all of the vowels in a given string
*/