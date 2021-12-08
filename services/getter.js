const axios = require('axios')
const fs = require('fs')
require('dotenv').config()
const getUrl = process.env.URL

const getHtml = async (url) => {
  try {
    const html = await axios.get(url)
    return html
  } catch (err) {
    console.log(err)
  }
}

const saveHtmlToFile = (html) => {
  fs.writeFileSync('./test.html', html)
}

async function main() {
  try {
    const html = await getHtml(getUrl)
    saveHtmlToFile(html.data)
  } catch (err) {
    console.log(err)
  }
}

main()
