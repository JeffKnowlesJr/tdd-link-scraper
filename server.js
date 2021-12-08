const parser = require('./services/parser')
const parser = require('./services/writer')
const fs = require('fs')

// read url
html = fs.readFileSync('./test.html')
links = parser.links(html)
writer.write(links)

console.log(links.length)
