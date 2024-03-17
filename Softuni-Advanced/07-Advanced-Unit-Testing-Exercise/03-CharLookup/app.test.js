import {lookupChar} from './app.js'
import { expect } from 'chai'

describe('check for correct working function', () => {
  it('return undefined if invalid values are passed', () => {
    expect(lookupChar('wasd', '123')).to.equal(undefined)
    expect(lookupChar([], 123)).to.equal(undefined)
    expect(lookupChar({}, '123')).to.equal(undefined)
    expect(lookupChar('123')).to.equal(undefined)
    expect(lookupChar(null)).to.equal(undefined)
    expect(lookupChar(null, 123)).to.equal(undefined)
    expect(lookupChar('asd', null)).to.equal(undefined)
    expect(lookupChar()).to.equal(undefined)
    expect(lookupChar('wasd', 1.5)).to.equal(undefined)
    expect(lookupChar('wasd', -251.5)).to.equal(undefined)

  })
  it('check for incorrect index return', () => {
    expect(lookupChar('wasd', -1)).to.equal('Incorrect index')
    expect(lookupChar('wasd', 50)).to.equal('Incorrect index')
  })
  it('check for valid output', () => {
    expect(lookupChar('wasd', 2)).to.equal('s')
  })
})