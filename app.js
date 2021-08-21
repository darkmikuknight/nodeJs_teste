const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { getData, queueWork } = require('./api.js')
const { sendEmail } = require('./emailSender.js')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const router = express.Router()
router.get('/', (request, response) => response.status(200).json({ 
                messagem: 'Web API funcionando! - Acesse /app para a funcionalidade do teste'
}))

const makeRequest = async function () {
    console.log('--Inicio--')

    getData().then(result => { 
        if (result) {
            queueWork(result).then(total => {
                sendEmail(result.length, total)
            });
        } else console.log('--Ocorreu algum erro inesperado--')

    } )
}

app.use('/', router)
app.get('/app', makeRequest)
app.use('*', (req, res) => {
    res.status(404).send({messagem: "Página não encontrada!"})
})

module.exports = app
console.log('API: ON')