const axios = require('axios')

async function getDadosApi() {
    const dataParametro = new Date().toLocaleDateString()

    const [dia,mes,ano] = dataParametro.split('/')

    const diaParametro = `${ano}-${mes}-${dia}`

    const resultado = await axios('https://epg-api.video.globo.com/programmes/1337?date='+diaParametro).catch(e => console.log(e))
    return resultado.data.programme.entries
}

module.exports = {getDadosApi}