const path = require('path')
const express = require('express')
const app = express()
const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware.js')

const hbs = require('hbs')
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear())
hbs.registerHelper('getAuthor', () => 'Abel Marco')
app.set('view engine', 'hbs') // clave valor

const port = 3000

app.use(consoleLogMiddleware)
app.use(fileLogMiddleware)

const staticRoute = path.join(__dirname, 'public')
app.use(express.static(staticRoute))

app.get('/home', (req, res) => {
  res.render('home', {
    pageTitle: 'Mi Web',
    siteWeb: 'Bienvenidos a la web de',
    pageBody: 'Esta es mi página personal'
  })
})
app.get('/contactar', (req, res) => {
  res.render('contactar', {
    pageTitle: 'Contactar'
  })
})
app.listen(port, () => console.log(`Se ha levantado servidor en el puerto ${port}`))
