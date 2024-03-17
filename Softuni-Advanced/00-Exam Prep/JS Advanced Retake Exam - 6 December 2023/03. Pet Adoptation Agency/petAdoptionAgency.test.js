import { petAdoptionAgency } from "./petAdoptionAgency.js";
import { expect } from "chai";


describe('Checking petAdoptationAgency functionality', () => {
  
  describe('Checking -- isPetAvailable -- method', () => {
    it('typeof values is different than expected => throw error', () => {
      expect(() => petAdoptionAgency.isPetAvailable(123, 123, true)).to.throw('Invalid input')
      expect(() => petAdoptionAgency.isPetAvailable('123', '123', true)).to.throw('Invalid input')
      expect(() => petAdoptionAgency.isPetAvailable('123', 123, 'true')).to.throw('Invalid input')
    })
    it('if availableCount is less or equal to zero => return message', () => {
      expect(petAdoptionAgency.isPetAvailable('Name', 0, true)).to.equal(`Sorry, there are no ${'Name'}(s) available for adoption at the agency.`)
      expect(petAdoptionAgency.isPetAvailable('Name', -1, true)).to.equal(`Sorry, there are no ${'Name'}(s) available for adoption at the agency.`)
    })
    it('check correct message with valid args', () => {
      expect(petAdoptionAgency.isPetAvailable('Name', 2, false)).to.equal(`Great! We have ${2} ${'Name'}(s) available for adoption, but they need vaccination.`)
      expect(petAdoptionAgency.isPetAvailable('Name', 2, true)).to.equal(`Great! We have ${2} vaccinated ${'Name'}(s) available for adoption at the agency.`)
    })
  })

  describe('Checking -- getRecommendedPets -- method', () => {
    it('typeof values is different than expected => throw error', () => {
      expect(() => petAdoptionAgency.getRecommendedPets('', 'str')).to.throw('Invalid input')
      expect(() => petAdoptionAgency.getRecommendedPets(['Name', 'Name2'], 123)).to.throw('Invalid input')
    })
    it('Check if recommendedPet list return valid message', () => {
      const validPets = [{name: 'Name', traits: 'Trait' }, {name: 'Name2', traits: 'Trait' }]
      expect(petAdoptionAgency.getRecommendedPets(validPets, 'Trait')).to.equal(`Recommended pets with the desired traits (${'Trait'}): ${'Name'}, ${'Name2'}`)
      expect(petAdoptionAgency.getRecommendedPets(validPets, 'No Match')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: ${'No Match'}.`)
    })
  })

  describe('Checking -- adoptPet -- method', () => {
    it('typeof values is different than expected => throw error', () => {
      expect(() => petAdoptionAgency.adoptPet(123, 'Name')).to.throw('Invalid input')
      expect(() => petAdoptionAgency.adoptPet('Name', 123)).to.throw('Invalid input')
    })
    it('Check if valid message is returned', () => {
      expect(petAdoptionAgency.adoptPet('PetName', 'AdopterName'))
        .to.equal(`Congratulations, ${'AdopterName'}! You have adopted ${'PetName'} from the agency. Enjoy your time with your new furry friend!`)
    })
  })
})