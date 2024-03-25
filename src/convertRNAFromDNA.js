function convertRNAFromDNA(dnaString) {
  if(dnaString.includes("T")) {
    const convertedRNA = dnaString.replace(/T/g, "U")
    return convertedRNA
  }
  return dnaString
}

export default convertRNAFromDNA

/**
Prompt: Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

Note:
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

Examples:
  getRNA("GCAT") -->  "GCAU"
  getRNA("ATCGCT") --> "AUCGCU"

Writing pseudocode and write any questions you might have about the prompt (clarifying questions)

Input by a data source or input by a user?
What would output be for empty?
Edge case - a scenario where an input is not the typical input or the most common input

 */