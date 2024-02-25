const UserRoute = require('../routes/User')

class RouteConfig {
    constructor(app) {
        this.app = app;
    }

    Routes() {
        this.app.use('/user', UserRoute);
    }
}

module.exports = RouteConfig;