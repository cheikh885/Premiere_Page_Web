const express = require('express')
const app = express()
const port = 3000
var meteo = require('./meteo.json')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('pages', { meteo: meteo })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})