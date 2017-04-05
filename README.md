# SMS Relay

Use this server to setup an SMS Relay Web Server using [twilio](twilio.com). This server can hosted on a an Heroku instance by `Forking` this repo.

## Setup
You need to provide three environment varibales to the heroku instance

|Varibale|Usage|
|--------|-----|
|Port|This is the port the server will run on, usually 80||
|Auth|This is your twillio auth token|
|sec| This is a self defined secret key|

## Usage
`{NAME OF PROJECT}.herokuapp.com/{Phone No.}/{Text}/{sec}`

_**Note:**_ The _Text_ needs to be encoded and the _Phone No._ must be in a format that twilio accepts.
