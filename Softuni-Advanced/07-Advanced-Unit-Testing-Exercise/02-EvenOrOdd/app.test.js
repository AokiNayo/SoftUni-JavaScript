import { isOddOrEven } from "./app.js";
import { expect } from "chai";

describe('invalid values', () => {
  it('return undefined if not a string', () => {
    expect(isOddOrEven(1)).to.equal(undefined)
    expect(isOddOrEven(null)).to.equal(undefined)
    expect(isOddOrEven([])).to.equal(undefined)
    expect(isOddOrEven({})).to.equal(undefined)
  })
  it('return valid string', () => {
    expect(isOddOrEven('str')).to.equal('odd')
    expect(isOddOrEven('stra')).to.equal('even')
  })
})