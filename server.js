var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseInput = bodyParser.urlencoded({extended:false});

app.use(express.static("public"));

app.post("/streak", parseInput, function(req,res){
  var body = req.body;
  var startDate  = new Date(parseInt(body.year),parseInt(body.month)-1,parseInt(body.day));
  var startMillis = startDate.getTime();
  var nowMillis = new Date();
  var diff = Math.ceil((nowMillis - startMillis) / 86400000);
  var obj = {days: diff};
  console.log(obj);
  res.json(obj);
});

app.listen(3000);
