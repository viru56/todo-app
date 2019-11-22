"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const config_1 = require("./config/config");
const init = () => {
    http.createServer(app_1.default).listen(config_1.config.httpPort, () => {
        console.log('\x1b[36m%s\x1b[0m', 'The HTTP server is running on port ' + config_1.config.httpPort + ' - ' + config_1.config.envName);
    });
};
//start the sever
init();
//# sourceMappingURL=server.js.map