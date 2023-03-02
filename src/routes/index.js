const express = require('express')
const config = require('config')
const apiVersion = `v${config.get('apiVersion')}`
const apiBasePath = `/api/${apiVersion}`
const auth = require('../middlewares/auth')

const router = express.Router()

router.use(`${apiBasePath}/auth`, require('./auth'))
router.use(`${apiBasePath}/test`, auth, require('./test'))
router.use(`${apiBasePath}/users`, require('./users'))

module.exports = router