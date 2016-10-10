// Libraries
const express = require('express');
const app = express();
const http = require('http').Server(app); // eslint-disable-line new-cap
const pretty = require('express-prettify');
const bodyParser = require('body-parser');

const PORT = 8080;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Allow CORS
app.use(pretty({ query: 'pretty' }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log(req.url)
  next();
});


// Routes
app.all('*', (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    headers: req.headers,
  });
});


http.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
