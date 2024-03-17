import {sum} from './app.js'
import { expect } from 'chai'


describe('My test', () => {
  it('calculate sum', () => {
    expect(sum([1,2,3])).to.be.equal(6)
  })
})