const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const users = require('../../users.json')
const refresh = require('../refreshTokens.json')
const fs = require("fs");

router.post('/', (req, res) => {
    for (let user of users) {
        if (req.body.login === user.login && req.body.password === user.password) {
            const accessToken = jwt.sign({
                data: {
                    email: user.login
                },
            }, 'secret', {expiresIn: '1h'})

            const refreshToken = jwt.sign({
                data: {
                    email: user.login
                }
            }, 'secretRefreshToken', {expiresIn: '30d'})

            let jsonObj = {}
            jsonObj[user.login] = refreshToken

            fs.writeFile(__dirname + "/../refreshTokens.json", JSON.stringify(jsonObj), function(err){
                if (err) throw err;
                console.log('The "data to append" was appended to file!');
            });


            res.json({user: user, accessToken: accessToken, refreshToken: refreshToken})
        } else {
            res.json({err: '!'})
        }
    }
})

router.get('/refresh', (req, res) => {
    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'secretRefreshToken', (err, decoded) => {
            if (refresh[decoded.data.email] === req.headers.authorization.replace('Bearer ', '')) {
                const accessToken = jwt.sign({
                    data: {
                        email: decoded.data.email
                    },
                }, 'secret', {expiresIn: '1h'})

                const refreshToken = jwt.sign({
                    data: {
                        email: decoded.data.email
                    }
                }, 'secretRefreshToken', {expiresIn: '30d'})

                let jsonObj = {}
                jsonObj[decoded.data.email] = refreshToken

                fs.writeFile(__dirname + "/../refreshTokens.json", JSON.stringify(jsonObj), function(err){
                    if (err) throw err;
                    console.log('The "data to append" was appended to file!');
                });

                res.json({accessToken: accessToken, refreshToken: refreshToken})
            }

            res.json('!')
        })
    }
})

module.exports = router