const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const path = require('path')
process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, 'config');
const config = require('config')
const cors = require('cors')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(routes)

app.listen(config.get('port'), config.get('address'), () => {
    console.log(`Server listens http://${config.get('address')}:${config.get('port')}`)
})