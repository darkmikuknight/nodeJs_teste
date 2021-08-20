const fetch = require('node-fetch')
const queue = require('fastq').promise(worker, 1)

async function worker (array) {
    let result = 0
    array.forEach(function(item, i, arr) {
        result += 1 // Para cada produto 
        result += item.items.length // Total de items de cada Produto (subProduto)
    })

    return result
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
    let total = 0

    // const result = data.map(info => ({ productId: info.productId, subProductCount: info.items.length }))
    // console.log(result)

    // data.forEach(function(item, i, arr) {
    //     total += 1 // Para cada produto 
    //     total += item.items.length // Total de items de cada Produto (subProduto)
    // })

    async function runQueue () {
        total = await queue.push(data)
        console.log('the result  is', total)
        return total
        console.log('the result ggf is', total)
    }
    
    runQueue()
    
}

module.exports = { getData }


