// server.js
// where your node app starts

// init project
const express = require('express');
const cors = require('cors');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
// allow Cross Origin requests, for testing
// app.use(cors());

// app.use('/public', express.static(process.cwd() + '/public'));

// get ip infos even if passing through a proxy like here
app.enable('trust proxy'); 

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami',(req,res)=>{
  res.json({ipaddress:req.ip,language:req.headers['accept-language'],software:req.headers['user-agent']})
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
