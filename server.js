const express = require('express')
const app = express()
const router = require('./router')

const port = 3333

app.use(router)
app.set('view engine', 'ejs')

app.listen(port, () => console.info(`Rodando na porta:${port} -- Acesse http://34.201.36.236:3333/`))