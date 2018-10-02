const fs = require('fs')

const consoleLogMiddleware = (req, res, next) => {
  const now = new Date().toString()
  const msg = `Time ${now} ${req.method} ${req.url}`
  console.log(msg)
  next()
}

const fileLogMiddleware = (req, res, next) => {
  const now = new Date().toString()
  const msg = `Time ${now} ${req.method} ${req.url}\n`
  fs.appendFile('server.log', msg, (err) => {
    if (err) {
      console.error(err)
    }
  })
  next()
}

module.exports = {
  consoleLogMiddleware,
  fileLogMiddleware
}
