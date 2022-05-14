const express = require('express')
const app = express()
const router = require('./router')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const port = 3333

app.use(express.urlencoded({ extended: true}))

//  VIEWS
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', './layouts/default')

app.use(router)


app.listen(port, () => console.info(`Rodando na porta:${port} -- Acesse http://34.201.36.236:3333/`))