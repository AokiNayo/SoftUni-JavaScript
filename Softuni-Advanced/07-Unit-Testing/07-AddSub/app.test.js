import {createCalculator} from './app.js'
import {expect} from 'chai'

describe('check if valid', () => {
  let myCalc;

  beforeEach('clear calc', () => {
    myCalc = createCalculator()
  })

  it('passing string as a parametr', function() {
    expect(myCalc).to.be.an('object').that.has.all.keys('add', 'subtract', 'get');
  })
  it('expect adding and subtracting numbers to be valid', () => {
    myCalc.add(5)
    myCalc.subtract(4)
    expect(myCalc.get()).to.equal(1)
  })
  it('expect to be parsed correctly',() => {
    myCalc.add(5)
    myCalc.add('10')
    myCalc.subtract(5)
    myCalc.subtract('5')
    expect(myCalc.get()).to.equal(5)
  })
})