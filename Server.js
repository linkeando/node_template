const AppConfig = require('./src/config/App.js');

const App = new AppConfig();
App.configureMiddlewares();
App.configureRoutes();
App.listen();