import {rgbToHexColor} from './app.js'
import {expect} from 'chai'

describe('function should return underfined', () => {
  it('check each color in negative range', () => {
    expect(rgbToHexColor(-100, 255, 255)).to.equal(undefined)
    expect(rgbToHexColor(255, -100, 255)).to.equal(undefined)
    expect(rgbToHexColor(255, 255, -100)).to.equal(undefined)
  })
  it('check each color in positive range', () => {
    expect(rgbToHexColor(555, 255, 255)).to.equal(undefined)
    expect(rgbToHexColor(255, 555, 255)).to.equal(undefined)
    expect(rgbToHexColor(255, 255, 555)).to.equal(undefined)
  })
  it('check each color if number', () => {
    expect(rgbToHexColor('255', 255, 255)).to.equal(undefined)
    expect(rgbToHexColor(255, '255', 255)).to.equal(undefined)
    expect(rgbToHexColor(255, 255, '255')).to.equal(undefined)
  })
  it('check each color is null', () => {
    expect(rgbToHexColor(null, 255, 255)).to.equal(undefined)
    expect(rgbToHexColor(255,null, 255)).to.equal(undefined)
    expect(rgbToHexColor(255, 255, null)).to.equal(undefined)
  })
  it('check with no params', () => {
    expect(rgbToHexColor()).to.equal(undefined)
  })
})
describe('valid test', () => {
  it('check if valid color', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    expect(rgbToHexColor(51, 51, 51)).to.equal('#333333')
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
  })
})