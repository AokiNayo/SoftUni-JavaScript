import {findNewApartment } from "./findApartment.js";
import { expect } from "chai";

describe('Testing functionality of findNewAppartment', () => {
  describe('Testing isGoodLocation method', () => {
    it('Not valid inputs [City & NearTransport] throws error', () => {
      expect(() => findNewApartment.isGoodLocation('Sofia', 'not bool')).to.throw('Invalid input!')
      expect(() => findNewApartment.isGoodLocation(['Sofia'], true)).to.throw('Invalid input!')
    })
    it('City is not in valid list', () => {
      expect(findNewApartment.isGoodLocation('Some', true)).to.equal('This location is not suitable for you.')
    })
    it('nearPublicTransportation with true and false values', () => {
      expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!')
      expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.')
    })
  })
  describe('Testing isLargeEnough method', () => {
    it('Not valid inputs [Apart. m2 && Minimal m2] throws error', () => {
      expect(() => findNewApartment.isLargeEnough('not array', 200)).to.throw('Invalid input!')
      expect(() => findNewApartment.isLargeEnough([100,100,100], '50')).to.throw('Invalid input!')
      expect(() => findNewApartment.isLargeEnough([], 50)).to.throw('Invalid input!')
    })
    it('Valid imputs should return valid output', () => {
      expect(findNewApartment.isLargeEnough([100, 50, 100], 50)).to.equal('100, 50, 100')
      expect(findNewApartment.isLargeEnough([100, 5, 100], 50)).to.equal('100, 100')
    })
  })
  describe('Testing isItAffordablePrice method', () => {
    it('Not valid inputs [Price & Budget] throws error', () => {
      expect(() => findNewApartment.isItAffordable('Not Number', 50)).to.throw('Invalid input!')
      expect(() => findNewApartment.isItAffordable(50, 'Not Number')).to.throw('Invalid input!')
      expect(() => findNewApartment.isItAffordable(0, 50)).to.throw('Invalid input!')
      expect(() => findNewApartment.isItAffordable(50, 0)).to.throw('Invalid input!')
      expect(() => findNewApartment.isItAffordable(-100, 50)).to.throw('Invalid input!')
      expect(() => findNewApartment.isItAffordable(50, -100)).to.throw('Invalid input!')
    })
    it('Expect valid inputs to return valid messages', () => {
      expect(findNewApartment.isItAffordable(100, 100)).to.equal('You can afford this home!')
      expect(findNewApartment.isItAffordable(100, 50)).to.equal(`You don't have enough money for this house!`)
    })
  })
})