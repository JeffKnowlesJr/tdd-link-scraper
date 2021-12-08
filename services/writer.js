const fs = require('fs')

const path = './output.csv'

exports.write = (data) => {
  try {
    fs.unlinkSync(path)
    //file removed
  } catch (err) {
    console.error(err)
  }

  for (let i = 0; i < data.length; i++) {
    fs.appendFileSync(
      path,
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
