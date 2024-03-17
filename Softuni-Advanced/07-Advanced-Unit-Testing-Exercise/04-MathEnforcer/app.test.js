import { mathEnforcer } from "./app.js";
import { expect } from "chai";

describe('test object and functionality', () => {

  it('valid object with properties', () => {
    expect(mathEnforcer).to.be.an('object').that.has.all.keys('addFive', 'subtractTen', 'sum')
  })
  it('test addFive functionality', () => {
    expect(mathEnforcer.addFive('5')).to.equal(undefined)
    expect(mathEnforcer.addFive([])).to.equal(undefined)
    expect(mathEnforcer.addFive(null)).to.equal(undefined)

    expect(mathEnforcer.addFive(5)).to.equal(10)
    expect(mathEnforcer.addFive(-5)).to.equal(0)
    expect(mathEnforcer.addFive(5.5)).to.equal(10.5)
    expect(mathEnforcer.addFive(-5.5)).to.equal(-0.5)
  })
  it('test subtractTen functionality', () => {
    expect(mathEnforcer.subtractTen('5')).to.equal(undefined)
    expect(mathEnforcer.subtractTen([])).to.equal(undefined)
    expect(mathEnforcer.subtractTen(null)).to.equal(undefined)

    expect(mathEnforcer.subtractTen(10)).to.equal(0)
    expect(mathEnforcer.subtractTen(20)).to.equal(10)
    expect(mathEnforcer.subtractTen(-20)).to.equal(-30)
    expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5)
    expect(mathEnforcer.subtractTen(-10.5)).to.equal(-20.5)
  })
  it('test sum functionality', () => {
    expect(mathEnforcer.sum('10', 10)).to.equal(undefined)
    expect(mathEnforcer.sum(10, '10')).to.equal(undefined)
    expect(mathEnforcer.sum(null, null)).to.equal(undefined)


    expect(mathEnforcer.sum(10, 10)).to.equal(20)
    expect(mathEnforcer.sum(-10, 10)).to.equal(0)
    expect(mathEnforcer.sum(10, -10)).to.equal(0)

    expect(mathEnforcer.sum(10.5, 10.5)).to.equal(21)
    expect(mathEnforcer.sum(-10.5, 10)).to.equal(-0.5)
    expect(mathEnforcer.sum(10, -10)).to.equal(0)
  })
})