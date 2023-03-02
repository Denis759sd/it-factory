const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.json({data: 'success'})
})

module.exports = router