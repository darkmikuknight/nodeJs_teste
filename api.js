const fetch = require('node-fetch')
const queue = require('fastq')(worker, 1)

function worker (array, cb) {
    const result = (data) => {
        let result = 0
        data.forEach(function(item, i, arr) {
            result += 1 // Para cada produto 
            result += item.items.length // Total de items de cada Produto (subProduto)
        })

        return result
    }

    cb(null, result(array))
}

const queueWork = async function (data) {
    let total
    queue.push(data, function (err, result) {
        if (err) { throw err }
        total = result
    })

    return total
}

const getData = async function () {
    const url = 'https://apiexamples.vtexcommercestable.com.br/api/catalog_system/pub/products/search/'
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json; charset=utf-8',
            'X-VTEX-API-AppKey': 'teste',
            'X-VTEX-API-AppToken': 'teste'
        }
    }

    const response = await fetch(url, options)
    const data = await response.json()
    return data
}

module.exports = { getData, queueWork }


