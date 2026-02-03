const express = require('express')
const { UserSignUp, UserSignIn } = require('../Controllers/auth.controller')

const AuthRouter = express.Router()

AuthRouter.post("/signup",UserSignUp)
AuthRouter.post("/signin",UserSignIn)

module.exports = AuthRouter