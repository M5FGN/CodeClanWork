const express = require('express');
const app = express();
const parser = require('body-parser');

// To add connection to database 1/2
const MongoClient = require('mongodb').MongoClient;

// Add router
const createRouter = require('./helpers/create_router.js')
const cors = require('cors')

app.use(parser.json());
app.use(cors())

// To add connection to database 2/2
MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
const db = client.db('games_hub')
const gamesCollection = db.collection('games');
const gamesRouter = createRouter(gamesCollection);
// Remember the / at the start of the route
app.use('/api/games', gamesRouter)
})
// Shows error if connection fails 
.catch(console.error);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
