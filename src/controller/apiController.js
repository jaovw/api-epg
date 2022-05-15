const axios = require('axios')

async function getDadosApi() {
    let dataParametro = new Date().toLocaleDateString()

    let [dia,mes,ano] = dataParametro.split('/')

    let diaParametro = `${ano}-${mes}-${dia}`

    const resultado = await axios('https://epg-api.video.globo.com/programmes/1337?date=2022-05-15').catch(e => console.log(e))

    return resultado.data.programme.entries
}

module.exports = {getDadosApi}