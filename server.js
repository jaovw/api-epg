const express = require('express')
const app = express()
const router = require('./router')

const port = 3333

app.use(router)

app.listen(port, () => console.info(`Rodando em http://localhost:${port}`))