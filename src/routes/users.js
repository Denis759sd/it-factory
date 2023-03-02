const { Router } = require('express')
const { UserController } = require('../controllers')

const router = Router()

router.get('/', UserController.list)
router.post('/', UserController.create)

module.exports = router