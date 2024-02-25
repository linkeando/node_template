const express = require('express');
const MiddlewareConfig = require("./MiddlewareConfig");
const RouteConfig = require("./RouteConfig");


class AppConfig {
    constructor(port = 3000) {
        this.app = express();
        this.port = port;
    }

    configureMiddlewares() {
        new MiddlewareConfig(this.app).Middlewares()
    }

    configureRoutes() {
        new RouteConfig(this.app).Routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = AppConfig;