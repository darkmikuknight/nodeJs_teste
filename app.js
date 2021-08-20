const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const api = require('./api.js')
// const cors = require('cors')
// const fs = require('fs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const router = express.Router()
router.get('/', (request, response) => response.status(200).json({messagem: 'Web API funcionando!'}))

const makeRequest = () => {
    console.log('--Init--')

    getData();
}


app.use('/', router)
// app.post('/correcoes/:id', corrigeItem)
app.get('/teste/', makeRequest)
// app.get('/correcoes/proxima/', proximaCorrecao)
app.use('*', (req, res) => {
    res.status(404).send({messagem: "Página não encontrada!"})
})

module.exports = app
console.log('API: ON')