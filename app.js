const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { getData } = require('./api.js')
const { sendEmail } = require('./emailSender.js')
// const { api } = require('./api');
// const cors = require('cors')
// const fs = require('fs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const router = express.Router()
router.get('/', (request, response) => response.status(200).json({messagem: 'Web API funcionando!'}))

// const makeRequest = async function () {
const makeRequest = () => {
    console.log('--Init--')
    
    // async (e) => {
        // var a = await getData();
        const dataResponse = getData()
        // // dataResponse.then(data => console.log('Tamanho dos items = ' + data.length))
        // console.log('value' + dataResponse)
        
    // }

    // async function runGetData () {
    //     let total = await getData()
    //     console.log('dsfsdfsdfsd', total)
    //     // return data
    // }

    sendEmail()

    // runGetData () 
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