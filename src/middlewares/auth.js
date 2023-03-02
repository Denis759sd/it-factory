const jwt = require('jsonwebtoken')
const users = require('../../users.json')

function auth (req, res, next) {
    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'secret', (err, decoded) => {
            if (err?.message) {
                res.json({err: err, message: 'Bad error'})
            }

            for (let user of users) {
                if (decoded.data.email === user.login)
                {
                    next()
                }
                break
            }

            res.json({err: 'error'})
        })
    }
}

module.exports = auth