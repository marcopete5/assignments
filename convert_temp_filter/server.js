var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 8001

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.listen(port, function() {
	console.log('Server is listening at port ' + port)
});