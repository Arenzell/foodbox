const cors = require('cors')
const routers = require('../components/router.provider')

module.exports = app => {
    app.use(cors())
    app.use(routers.getRouter())
}
