const express = require('express')
const router = express.Router()
const {getDadosApi} = require('./src/controller/apiController')

router.get('/', async (req, res) =>{

    let dataAbreviada = Math.floor(new Date().getTime() / 1000)

    const dataFront = new Date().toLocaleString('pt-br', { hour12: false, timeZone: 'UTC',dateStyle: 'short'})

    const resultadosGetDados = await getDadosApi()

    let programacaoAtual = []
    for(dado of resultadosGetDados){ 

        if(dado.end_time > dataAbreviada && dado.start_time <= dataAbreviada){

            programacaoAtual.push(dado.program.name)

        }else {
            'Algo deu errado'
        }
    }
    
    res.render('index',{ api:resultadosGetDados,  programacaoAtual, title: 'EPG', dataHeader: dataFront})
})



module.exports = router