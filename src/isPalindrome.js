function isPalindrome(word) {
  const reversedWord = word.split("").reverse()
  const checkedWork = word.split('').every((char, i) => {
    return char === reversedWord[i]
  })
  return checkedWork
}

export default isPalindrome


/**
 Write a function that takes a single string as input and returns a boolean indicating whether the string is a palindrome.
 */

 /**
  GOAL: return a boolean indicating whether the the characters in a string read the same forward and backward.
  INPUT: a word as a string
  OUTPUT: boolean
  HOW: 
  - create a variable that stores the word reversed. 
      - split each character, changing data type into an array with split() method followed by the reverse() method.
  - loop through the original word and compare if the current element is strictly equal to the character in the the reversed word at the same index position.
      - can follow same steps to split each character, changing data type into an array
      - loop using every() method which returns a boolean
  */