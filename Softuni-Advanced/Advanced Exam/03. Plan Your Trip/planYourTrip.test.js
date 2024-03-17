import { planYourTrip } from "./planYourTrip.js";
import { expect } from "chai";


describe('Checking functionality for planYourTrip', () => {
  describe('Checking -- choosingDestination -- method', () => {
    it('Method should throw an error if year is different than 2024 and destination is not Ski Resort', () => {
      expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw('Invalid Year!')
      expect(() => planYourTrip.choosingDestination('One Piece', 'Winter', 2024)).to.throw('This destination is not what you are looking for.')
    })

    it ('Depeding if season is a winter or not => get correct return result', () => {
      expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`)
      expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`)
    })
  })

  describe('Checking -- exploreOptions -- method', () => {
    it('Method should throw an error if inputs are not of correct type or index input is out of the bound', () => {
      expect(() => planYourTrip.exploreOptions('Not Array', 1)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.exploreOptions([1,2,3], 'STRING')).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.exploreOptions([1,2,3], -1)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.exploreOptions([1,2,3], 55)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.exploreOptions([1,2,3], 3)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.exploreOptions([1,2,3], 3.31)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.exploreOptions([1,2,3], -3.31)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.exploreOptions([], 2)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.exploreOptions({}, 2)).to.throw(`Invalid Information!`)

    })
    it('Should return valid result', () => {
      expect(planYourTrip.exploreOptions([1,2,3], 0)).to.equal('2, 3')
      expect(planYourTrip.exploreOptions([1,2,3,4], 2)).to.equal('1, 2, 4')
    })
  })

  describe('Checking -- estimateExpenses -- method', () => {
    it('Method should throw an error if input values are not of correct type or distance and fuel are less or equal to zero', () => {
      expect(() => planYourTrip.estimateExpenses('123', 123)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(123, '123')).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(0, 123)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(123, 0)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(-25, 125)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(125, -25)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(125.235, -25.235)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(125.235, -25.253)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(125.235, undefined)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(undefined, 125.235)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(123, undefined)).to.throw(`Invalid Information!`)
      expect(() => planYourTrip.estimateExpenses(undefined, 123)).to.throw(`Invalid Information!`)
    })
    it ('Should return valid return message', () => {
      expect(planYourTrip.estimateExpenses(2, 5)).to.equals(`The trip is budget-friendly, estimated cost is $10.00.`)
      expect(planYourTrip.estimateExpenses(200.123456, 2)).to.equals(`The trip is budget-friendly, estimated cost is $400.25.`)
      expect(planYourTrip.estimateExpenses(2, 200.123456)).to.equals(`The trip is budget-friendly, estimated cost is $400.25.`)
      expect(planYourTrip.estimateExpenses(2, 500)).to.equals(`The estimated cost for the trip is $1000.00, plan accordingly.`)
      expect(planYourTrip.estimateExpenses(2, 500)).to.equals(`The estimated cost for the trip is $1000.00, plan accordingly.`)
      expect(planYourTrip.estimateExpenses(2, 500.123456)).to.equals(`The estimated cost for the trip is $1000.25, plan accordingly.`)
      expect(planYourTrip.estimateExpenses(500.123456, 2)).to.equals(`The estimated cost for the trip is $1000.25, plan accordingly.`)
      expect(planYourTrip.estimateExpenses(500.123456, 500.123456)).to.equals(`The estimated cost for the trip is $250123.47, plan accordingly.`)
    })
  })
})