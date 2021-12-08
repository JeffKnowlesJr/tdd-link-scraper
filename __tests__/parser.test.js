const parser = require('../services/parser')
const fs = require('fs')
let html
let links

beforeAll(() => {
  html = fs.readFileSync('./test.html')
  links = parser.links(html)
})

const textCases = () => {}

it('should give the correct link url', () => {
  expect(links[0].url).toBe('#')
})

it('should give the correct link text', () => {
  expect(links[0].text).toBe('')
})

it('should give the correct link id', () => {
  expect(links[0].id).toBe('scroll')
})

it('should give the correct classes', () => {
  expect(links[0].classes).toStrictEqual([''])
})

it('should give the correct parent classes', () => {
  expect(links[0].parentClasses).toStrictEqual([
    'html',
    'not-front',
    'not-logged-in',
    'no-sidebars',
    'page-node',
    'page-node-',
    'page-node-3207',
    'node-type-page'
  ])
})
