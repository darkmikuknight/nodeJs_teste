const fetch = require('node-fetch');
// const { response } = require('./app');
const getData = !async function() {
    console.log('--Get--');

    const url = 'https://apiexamples.vtexcommercestable.com.br/api/catalog_system/pub/products/search/'
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json; charset=utf-8',
            'X-VTEX-API-AppKey': 'teste',
            'X-VTEX-API-AppToken': 'teste'
        }
    };

    let data = fetch(url, options)
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        if (json) {
            console.log(json)
            console.log('--End--')
            return json;
        } else console.log('Não foi retornado nenhum resultado!')

    })
    .catch(err => console.error('error:' + err));
    console.log(data)
}

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
    console.log(data);
    return data
}

module.exports = { getData, newGetData}

// module.exports = getData = !async function() {
//     let data = await fetch("https://raw.githubusercontent.com/IbrahimTanyalcin/LEXICON/master/lexiconLogo.png")
//         .then((response) => response.blob())
//         .then(data => {
//             return data;
//         })
//         .catch(error => {
//             console.error(error);
//         });
        
//     console.log(data);
// }();


