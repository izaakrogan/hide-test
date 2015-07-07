var Hapi = require('hapi')

var server = new Hapi.Server()
var email = require('./email.js')

server.connection({
	port: process.env.PORT || 1337
})

server.route({
    method: 'POST',
    path: '/',
    handler: function (request, reply) {
        email(request.payload.address, request.payload.message, function (error, result) {
        	reply('alright!')
        })
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});