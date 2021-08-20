const fetch = require('node-fetch');

const newGetData = async function fetchText() {
    const url = 'https://apiexamples.vtexcommercestable.com.br/api/catalog_system/pub/products/search/'
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json; charset=utf-8',
            'X-VTEX-API-AppKey': 'teste',
            'X-VTEX-API-AppToken': 'teste'
        }
    };

    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data);

    const result = data.map(info => ({ productId: info.productId, subProductCount: info.items.length }));
    console.log(result)
    let total = 0
    data.map(info => {
        total += 1 // Para cada produto 
        total += info.items.length // Total de items de cada Produto (subProduto)
    });
    console.log(total)

    return data
}

module.exports = { newGetData }


