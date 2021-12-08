const parser = require('./services/parser')
const writer = require('./services/writer')
const formatter = require('./services/formatter')
const fs = require('fs')

// read url
const html = fs.readFileSync('./test.html')
const links = parser.links(html)
const data = formatter.format(links)
writer.write(data)

console.log(links.length)
