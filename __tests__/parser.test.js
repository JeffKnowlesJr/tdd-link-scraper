const parser = require('../services/parser')
const fs = require('fs')
let html
let links

beforeAll(() => {
  html = fs.readFileSync('./test.html')
  links = parser.links(html)
})

it('should give the correct link url', () => {
  expect(links[0].url).toBe('#')
})

it('should give the correct link text', () => {
  expect(links[0].text).toBe('')
})

it('should give the correct link id', () => {
  expect(links[0].id).toBe('scroll')
})
