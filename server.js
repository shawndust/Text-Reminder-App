const express = require('express')
const app = express()
var path = require("path");
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors())

var twilio = require('twilio');

var accountSid = 'AC76aa1d8c1f355eeecb3e14f0fb55a74d'; // Your Account SID from www.twilio.com/console
var authToken = '2ded5722dcda4f03fb9fc9069742bb44';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.post('/sendmessage', function(req, res) 
	{ 

        console.log(req.body)
	    client.messages.create({
            body: 'Dear ' + req.body.name + ' please take ' + req.body.quantity + ' '+ req.body.brand + ' pills now.',
		    to: '+1'+ req.body.cellNum,  // Text this number
	        from: '+13128184945' // From a valid Twilio number
	})
	

	.then(function(message){ 
		
		
		console.log(message.sid)
		res.send('SUCCESS!')

	})
})
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))