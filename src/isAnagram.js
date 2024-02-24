function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  if(str1.length !== str2.length) {
    return false
  } 
  
  const charCount = {}
  for(let i = 0; i < str1.length; i++) {
    const char = str1[i]
    charCount[char] = (charCount[char] || 0) + 1
  }

  for(let i = 0; i < str2.length; i++) {
    const char = str2[i]
    if(!charCount[char]) {
      return false
    } else {
      charCount[char] --
    }
  } 
  return true
}

export default isAnagram

/**
 - normalize the case
 - check string length
 - if length is different, the two strings are not anagrams.
 - loop over the first string and count the number of times each letter occurs
 - loop over the second string and decrement the count, if the count is 0 at the end of the loop, the two strings are anagrams
 */