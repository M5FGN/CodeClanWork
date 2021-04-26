const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


//Sets the Port number - normally 300 but setting to 5000 as React is listening on Port 3000
app.listen(5000, function() {
console.log('Running on Port 5000')
})


// Get Request - Route then function to be activated when user gets to the route.
// req is request and res is response
app.get('/', function(req, res) {
// response is mandatory but req can be left out.
// res.send('Hi Test');

// This creates a JSON text - API.
res.json({message: "Hello World!"})
})
// To begin with, we are going to write a simple server that handles the following HTTP request:

// method: GET
// route: home route ('/')
// port: 3000

