const axios = require('axios')
const fs = require('fs')
require('dotenv').config()
const getUrl = process.env.URL
const path = './src.html'

const getHtml = async (url) => {
  try {
    const html = await axios.get(url)
    return html
  } catch (err) {
    console.log(err)
  }
}

const saveHtmlToFile = (html) => {
  fs.writeFileSync(path, html)
}

async function main() {
  try {
    await fs.unlinkSync(path)
    //file removed
  } catch (err) {
    console.error(err)
  }
  try {
    const html = await getHtml(getUrl)
    saveHtmlToFile(html.data)
  } catch (err) {
    console.log(err)
  }
}

main()
