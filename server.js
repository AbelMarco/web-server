const express = require('express')
const app = express()
app.get('/', (req, res) => { res.send('Esto funciona') })
app.listen(3000)
