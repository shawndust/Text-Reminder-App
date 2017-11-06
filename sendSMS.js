var twilio = require('twilio');

var accountSid = 'zzzz'; // Your Account SID from www.twilio.com/console
var authToken = 'zzzz';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+1234',  // Text this number
    from: '+5678' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
