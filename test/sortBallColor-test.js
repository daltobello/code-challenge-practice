import sortBallColor from "../src/sortBallColor.js";
import { expect } from "chai";

describe("sortBallColor", () => {
  it("should sort array of balls by color", () => {
    const result = sortBallColor([
      { color: "yellow", size: "small" },
      { color: "purple", size: "small" },
      { color: "purple", size: "medium" },
      { color: "gray", size: "large" },
      { color: "blue", size: "medium" },
      { color: "yellow", size: "small" },
      { color: "blue", size: "large" },
      { color: "blue", size: "medium" },
      { color: "gray", size: "small" },
      { color: "yellow", size: "large" },
      { color: "purple", size: "medium" },
      { color: "gray", size: "large" },
      { color: "blue", size: "small" },
      { color: "gray", size: "medium" },
      { color: "yellow", size: "large" },
      { color: "purple", size: "medium" },
      { color: "blue", size: "small" },
      { color: "purple", size: "large" },
      { color: "gray", size: "medium" },
      { color: "purple", size: "small" },
    ]);
    expect(result).to.deep.equal([
      { color: "yellow", size: "small" },
      { color: "yellow", size: "small" },
      { color: "yellow", size: "large" },
      { color: "yellow", size: "large" },
      { color: "purple", size: "small" },
      { color: "purple", size: "medium" },
      { color: "purple", size: "medium" },
      { color: "purple", size: "medium" },
      { color: "purple", size: "large" },
      { color: "purple", size: "small" },
      { color: "gray", size: "large" },
      { color: "gray", size: "small" },
      { color: "gray", size: "large" },
      { color: "gray", size: "medium" },
      { color: "gray", size: "medium" },
      { color: "blue", size: "medium" },
      { color: "blue", size: "large" },
      { color: "blue", size: "medium" },
      { color: "blue", size: "small" },
      { color: "blue", size: "small" },
    ]);
  });
});
