import { expect } from "chai";
import { isSymmetric } from "./app.js";

describe("invalid symmetry tests", () => {
  it("return false if string is passed", () => {
    expect(isSymmetric("str")).to.equal(false);
  });
  it("return false if string is passed", () => {
    expect(isSymmetric({ arr: [1, 2, 1] })).to.equal(false);
  });
  it("return false if number is passed", () => {
    expect(isSymmetric(123)).to.equal(false);
  });
  it("return false if array is not symmetrical", () => {
    expect(isSymmetric([1, 2, 1, 1])).to.equal(false);
  });
  it("return false if null", () => {
    expect(isSymmetric(null)).to.equal(false);
  });
  it("return false if underfined", () => {
    expect(isSymmetric(undefined)).to.equal(false);
  });
  it("return false if empty", () => {
    expect(isSymmetric()).to.equal(false);
  });
  it('return false if mixed not symm', () => {
    expect(isSymmetric(['1',2,'3',2, 1])).to.equal(false)
  })
});
describe("valid symmetry tests", () => {
  it("return true if symmtery with numbs was met", () => {
    expect(isSymmetric([3, 2, 1, 1, 2, 3])).to.equal(true);
  });
  it("return true if mixed num and string", () => {
    expect(isSymmetric([1, 2, "3", 2, 1])).to.equal(true);
  });
  it("return true if symmtery with str was met", () => {
    expect(isSymmetric(["a", "a"])).to.equal(true);
  });
  it("return true if symmtery with str was met", () => {
    expect(isSymmetric([1, 1])).to.equal(true);
  });
  it("return true if symmtery with str was met", () => {
    expect(isSymmetric([5])).to.equal(true);
  });
});
