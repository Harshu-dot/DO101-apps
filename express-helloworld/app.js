var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
//nodejs
//port-8080
//hello 
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

