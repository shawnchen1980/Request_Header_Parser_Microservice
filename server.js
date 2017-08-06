// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  
  var a=request.headers['x-forwarded-for'].split(",")[0];
  var b=request.acceptsLanguages()[0];
  var c=request.headers['user-agent'];
  var c1=c.indexOf("("),c2=c.indexOf(")");
  var o={ipaddress:a,language:b,software:c.slice(c1+1,c2)};
  response.send(o);
  response.end();
  
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
