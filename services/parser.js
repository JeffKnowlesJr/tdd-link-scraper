const cheerio = require('cheerio')

exports.links = (html) => {
  const $ = cheerio.load(html)
  return $('a')
    .map((index, element) => {
      const url = $(element).attr('href')
      const text = $(element).text()
      // Excluding Superficial fields
      // const id = $(element).attr('id')
      // let classes = $(element).attr('class')
      // if (classes) {
      //   classes = classes.split(' ')
      // } else {
      //   classes = ['']
      // }
      // let parentClasses = $(element).parent().attr('class')
      // if (parentClasses) {
      //   parentClasses = parentClasses.split(' ')
      // } else {
      //   parentClasses = ['']
      // }
      return { url, text /*, id, classes, parentClasses*/ }
    })
    .get()
}
