const express = require('express')
const router = express.Router()
const {getDadosApi} = require('./src/controller/apiController')


router.get('/', async (req, res) =>{

    const resultadosGetDados = await getDadosApi('2022-05-14')
    
    res.render('index',{api:resultadosGetDados})
})



module.exports = router