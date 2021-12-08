require('dotenv').config()

exports.format = (links) => {
  const dataUrl = process.env.URL
  const data = []
  const hostname = url_domain(dataUrl)

  for (let i = 0; i < links.length; i++) {
    ;({ text, url } = links[i])

    if (url && url.charAt(0) === '/') {
      url = hostname + url
    }
    text = text.trim()

    data.push({ text, url })
  }

  return data
}

function url_domain(url) {
  const { hostname } = new URL(url)
  return hostname
}
