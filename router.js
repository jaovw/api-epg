const express = require('express')
const router = express.Router()


router.get('/', (req, res) =>{
    res.send('Aplicando componente Router()')
})



module.exports = router