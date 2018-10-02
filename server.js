const express = require('express')
const app = express()
const { consoleLogMiddleware, fileLogMiddleware } = require('./middleware.js')

const port = 3000

app.use(consoleLogMiddleware)
app.use(fileLogMiddleware)

app.get('/', (req, res) => { res.send('Esto funciona') })
app.get('/contactar', (req, res) => { res.send({ nombre: 'Pepe', apellido: 'Martinez' }) })
app.listen(port, () => console.log(`Se ha levantado servidor en el puerto ${port}`))
