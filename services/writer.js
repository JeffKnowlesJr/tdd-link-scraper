const fs = require('fs')

const filename = './output.csv'

exports.write = (data) => {
  for (let i = 0; i < data.length; i++) {
    fs.appendFileSync(
      filename,
      extractAsCSV(data[i]),
      (err) => {
        if (err) {
          console.log('Error writing to csv file', err)
        }
      },
      'UTF-8',
      { flags: 'a+' }
    )
  }
}

function extractAsCSV({ text, url }) {
  const row = `"${text}", ${url}\n`
  return row
}
