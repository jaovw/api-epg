const axios = require('axios')

async function getDadosApi() {
    let dataParametro = new Date().toLocaleDateString()

    let [dia,mes,ano] = dataParametro.split('/')

    let diaParametro = `${ano}-${mes}-${dia}`
                                                            //  LEVANDO EM CONSIDERAÇÃO O SERVIDOR COM FORMATO MM/DD/YYYY (HEROKU E VM AWS)
    const resultado = await axios(`https://epg-api.video.globo.com/programmes/1337?date=${ano}-${dia}-${mes}`).catch(e => console.log(e))

    return resultado.data.programme.entries
}

module.exports = {getDadosApi}