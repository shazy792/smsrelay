const express = require('express')
const bodyParser = require('body-parser');
const app = express()

var accountSid = 'ACa93dc2d648868bd6e31a21099a277dbc'; 
var authToken = process.env.AUTH;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/:ph/:text/:sec', function (req, res) {
  //require the Twilio module and create a REST client 
    var client = require('twilio')(accountSid, authToken); 

    if (req.params.sec === process.env.sec) {
        client.messages.create({ 
            to: req.params.ph, 
            from: "+14043818013", 
            body: req.params.text, 
        }, function(err, message) { 
            console.log("Message Sent"); 
        });
    }

    res.send("Done");    

})

app.listen(process.env.PORT || 3000, function () {
  console.log('Relay started')
})