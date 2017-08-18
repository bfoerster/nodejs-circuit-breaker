'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        return reply('hello world');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server started at ', server.info.uri);
});