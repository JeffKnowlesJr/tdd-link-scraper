const parser = require('./services/parser')
const writer = require('./services/writer')
const formatter = require('./services/formatter')
const fs = require('fs')
require('dotenv').config()
const path = './src.html'

// read url
const html = fs.readFileSync(path)
const links = parser.links(html)
const data = formatter.format(links)
writer.write(data)

console.log(`${links.length} Links Parsed from ${process.env.URL}.`)
