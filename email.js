"use strict";


var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun(process.env.MAILGUN);

module.exports = email;

function email (address, message, callback) {

	mg.sendText(address, "izaakrogan@gmail.com", 'Hello Bes', message, function (error) {
		
		if(error) {
			callback(error, undefined);
		} else {
			callback(undefined, "Email sent");
		}
	});
}