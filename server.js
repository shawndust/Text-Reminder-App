const express = require('express')
const app = express()
var path = require("path");

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.get('/sendmessage', function(req, res) 
	{ 
		var twilio = require('twilio');

		var accountSid = 'AC76aa1d8c1f355eeecb3e14f0fb55a74d'; // Your Account SID from www.twilio.com/console
	var authToken = '2ded5722dcda4f03fb9fc9069742bb44';   // Your Auth Token from www.twilio.com/console

	var twilio = require('twilio');
	var client = new twilio(accountSid, authToken);

	client.messages.create({
		body: 'Hello from Node',
		to: '+13094531417',  // Text this number
	        from: '+13128184945' // From a valid Twilio number
	})
	

	.then(function(message){ 
		
		
		console.log(message.sid)
		res.send('SUCCESS!')

	})
})
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))