var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars, Carlos Fernando!\n');
});

app.get('/pluton', function (req, res) {
  res.send('Hello Pluton, Carlos Fernando!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

