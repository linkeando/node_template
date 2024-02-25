const express = require('express');
const path = require('path');
const {specs, swaggerUi} = require('../utils/Swagger.js');

class MiddlewareConfig {
    constructor(app) {
        this.app = app;
        this.publicRoute = path.join(__dirname, '../../public');
    }

    Middlewares() {
        this._configureExpress();
        this._configureSwagger();
        this._serveStaticFiles();
        this._setViewEngine();
    }

    _configureExpress() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    _configureSwagger() {
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    }

    _serveStaticFiles() {
        this.app.use(express.static(this.publicRoute));
    }

    _setViewEngine() {
        const viewsDirectory = path.join(this.publicRoute, 'views');
        this.app.set('views', viewsDirectory);
        this.app.set('view engine', 'ejs');
    }
}

module.exports = MiddlewareConfig;
