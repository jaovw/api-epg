const axios = require('axios')

async function getDadosApi(diaAtual) {

    const resultado = await axios(`https://epg-api.video.globo.com/programmes/1337?date=${diaAtual}`).catch(e => console.log(e))
    return resultado.data.programme.entries
}

module.exports = {getDadosApi}