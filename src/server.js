const Hapi = require('@hapi/hapi');

const initServer = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        },
    });
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

initServer();