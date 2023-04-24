const { Router } = require('express')
const { json } = require('body-parser')
const { delay } = require('../helper/middlewares.helper')

const router = Router()
const jsonParser = json()

// Setup all controllers
const accessController = require('./access.controller')

// Define all controllers endpoints
router.post('/signin', jsonParser, delay(1500), accessController.signin)
router.post('/signup', jsonParser, delay(1500), accessController.signup)

module.exports = {
    getRouter: () => router
}
