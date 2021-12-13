const cheerio = require('cheerio')

exports.links = (html) => {
  const $ = cheerio.load(html)
  return $('a')
    .map((index, element) => {
      const url = $(element).attr('href')
      const text = $(element).text()
      return { url, text }
    })
    .get()
}
