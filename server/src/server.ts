import app from './app';
import * as http from 'http';
import {config} from './config/config';

const init = () => {
    http.createServer(app).listen(config.httpPort, () => {
        console.log('\x1b[36m%s\x1b[0m', 'The HTTP server is running on port ' + config.httpPort + ' - ' +config.envName);
    });
};
 //start the sever
 init();