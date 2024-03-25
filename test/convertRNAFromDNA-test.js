import convertRNAFromDNA from "../src/convertRNAFromDNA.js";
import { expect } from "chai"

describe("convertRNAFromDNA", () => {
  it("should convert DNA string (GCAT) to RNA string (GCAU)", () => {
    const result = convertRNAFromDNA("GCAT")
    expect(result).to.equal("GCAU")
  })

  it("should convert DNA string (ATCGCT) to RNA string (AUCGCU)", () => {
    const result = convertRNAFromDNA("ATCGCT")
    expect(result).to.equal("AUCGCU")
  })
})