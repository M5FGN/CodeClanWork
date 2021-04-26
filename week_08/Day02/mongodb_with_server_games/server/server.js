const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json());

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
