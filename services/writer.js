const fs = require('fs')
const { exec } = require('child_process')
require('dotenv').config()

const path = `./bin/${process.env.URL.replace(/[^\w\s]/gi, '')}.csv`

exports.write = async (data) => {
  try {
    fs.unlinkSync(path)
    //file removed
  } catch (err) {
    console.error(err)
  }

  try {
    await appendData(data)
  } catch (err) {
    console.log(err)
  }

  exec(`start excel ${path}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`)
      return
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`)
      return
    }

    console.log(`stdout:\n${stdout}`)
  })
}

function extractAsCSV({ text, url }) {
  const row = `"${text}", ${url}\n`
  return row
}

function appendData(data) {
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
