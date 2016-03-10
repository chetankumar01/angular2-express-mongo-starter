'use strict';

import express from 'express';
var app = express();

app.use(express.static(__dirname + '/build'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
