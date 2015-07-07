var Hapi = require('hapi')

var server = new Hapi.Server()

server.connection({
	port: process.env.PORT || 1337
})

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});