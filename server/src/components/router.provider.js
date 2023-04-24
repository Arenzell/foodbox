const { Router } = require('express')
const router = Router()
const basePath = '/api/v1'

// Setup all modules routers
const securityRouter = require('./security/router.provider')

// Define all modules endpoints
router.use(`${basePath}/security`, securityRouter.getRouter())

module.exports = {
    getRouter: () => router
}
