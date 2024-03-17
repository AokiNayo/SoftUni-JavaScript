import { PaymentPackage } from "./PaymentPackage.js";
import { expect } from "chai";

describe('PaymentPackage class functionality', () => {
  let newPayment

  beforeEach(() => {
    newPayment = new PaymentPackage('SomeName', 100)
  })
  it('check if class instance is created correctly', () => {
    expect(newPayment).to.be.an.instanceof(PaymentPackage)
    expect(newPayment).to.have.all.keys('_name','_value', '_VAT', '_active')
    expect(typeof newPayment.toString).to.equal('function')
  })

  it('invalid name inputs should throw error', () => {
    expect( () => newPayment.name = '').to.throw('Name must be a non-empty string')
    expect( () => newPayment.name = 123).to.throw('Name must be a non-empty string')
  })

  it('valid name sets newValue and get newValue', () => {
    newPayment.name = 'SomeName'
    expect(newPayment.name).to.equal('SomeName')
  })

  it('invalid value inputs should throw error', () => {
    expect( () => newPayment.value = '').to.throw('Value must be a non-negative number')
    expect( () => newPayment.value = -123).to.throw('Value must be a non-negative number')
  })
  it('valid value sets newValue and get newValue', () => {
    newPayment.value = 123
    expect(newPayment.value).to.equal(123)
    newPayment.value = 0
    expect(newPayment.value).to.equal(0)
  })

  it('invalid VAT inputs should throw error', () => {
    expect( () => newPayment.VAT = '').to.throw('VAT must be a non-negative number')
    expect( () => newPayment.VAT = -123).to.throw('VAT must be a non-negative number')
  })
  it('valid VAT sets newValue and get newValue', () => {
    newPayment.VAT = 123
    expect(newPayment.VAT).to.equal(123)
  })

  it('invalid active input should throw error', () => {
    expect( () => newPayment.active = '').to.throw('Active status must be a boolean')
  })
  it('valid active sets newValue and get newValue', () => {
    newPayment.active = false
    expect(newPayment.active).to.be.false
  })

  it('toString method returns valid with active true', () => {
    const output = [
      `Package: SomeName`,
      `- Value (excl. VAT): 100`,
      `- Value (VAT 20%): 120`
    ];
    expect(newPayment.toString()).to.be.equal(output.join('\n'))
  })
  it ('toString method returns valid with active false', () => {
    newPayment.active = false
    const output = [
      `Package: SomeName (inactive)`,
      `- Value (excl. VAT): 100`,
      `- Value (VAT 20%): 120`
    ];
    expect(newPayment.toString()).to.be.equal(output.join('\n'))
  })
})