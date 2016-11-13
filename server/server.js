var express = require('express');
var app = express();
var Router = express.Router();
var fs = require('fs');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:9019");
  res.setHeader("Access-Control-Allow-Credentials", "false");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since");
  next();
});

app.get('/work', function (req, res) {
	fs.readFile('./mock_data/workInfo.json','utf-8',function(err, data){
			if(err){
				return console.log("Error while writing file "+ err);
			}
			res.send(data);
	});
});

app.listen(8080, function(){
	console.log("server started at 8080");
});