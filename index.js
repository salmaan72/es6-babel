import server from './src/server';
import config from './config';

server.create(config);
server.start();