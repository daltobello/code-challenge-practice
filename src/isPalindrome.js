function isPalindrome(word) {
  let start = 0
  let end = word.length - 1

  while(start < end) {
    if(word[start] !== word[end]) {
      return false
    }
    start ++
    end --
  }
  return true
}

export default isPalindrome


/**
 Write a function that takes a single string as input and returns a boolean indicating whether the string is a palindrome.
 */

  /**
GOAL: return a boolean indicating whether the the characters in a string read the same forward and backward.INPUT: a word as a string
OUTPUT: boolean
HOW: 
- create two pointer variables, one at the starting index and one at the ending index of the string
- check if the pointers at the start and end are the same: if not, the word is not a palindrome so return false
- increment the start pointer so it moves one position to the right and decrement the end pointer so it moves one position to the left
- continue comparing characters and moving pointers until start pointer reaches end
- if no mismatch the word is a palindrome so return true

this method is efficient because it only needs to check up to half of the string (since the second half is supposed to be a mirror image of the first half if the word is a palindrome).
  */

 /**
 ALTERNATIVE

  HOW: 
  - create a variable that stores the word reversed. 
      - split each character, changing data type into an array with split() method followed by the reverse() method.
  - loop through the original word and compare if the current element is strictly equal to the character in the the reversed word at the same index position.
      - can follow same steps to split each character, changing data type into an array
      - loop using every() method which returns a boolean

      function isPalindrome(word) {
        const reversedWord = word.split("").reverse()
        const checkedWork = word.split('').every((char, i) => {
          return char === reversedWord[i]
        })
        return checkedWork
      }
  */


      


