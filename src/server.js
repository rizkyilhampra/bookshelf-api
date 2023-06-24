const Hapi = require('@hapi/hapi');
const console = require('console');
const routes = require('./routes');

const initServer = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    server.route(routes);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

initServer();
