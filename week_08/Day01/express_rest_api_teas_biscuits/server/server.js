const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('./helpers/create_router')

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

app.use(cors());

// This function is used instead of Body Parser - to complete Post 
app.use(express.json()); 

const teasRouter = createRouter(teas);
app.use('/api/teas', teasRouter);

const biscuitsRouter = createRouter(biscuits);
app.use('/api/biscuits', biscuitsRouter);


// Without Router ....
// Get is an inbuilt function - also Post, Put, Delete
// Takes in an URL and a callback function with the request and response parameters
// app.get('/api/teas', (req, res) => {
// res.json(teas);
// });

// app.post('/api/teas', (req, res) => {
//   console.log('Request Body:', req.body);
//   teas.push(req.body);
//   // This line will return in insomnia to show that it has worked - before this line is added insomnia will just timeout.
//   res.json(teas);
// })

// app.put('/api/teas/:id', (req, res) => {
// const index = req.params.id;
// // returns the updated version of the tea that is updated.
// teas[index] = req.body;
// res.json(teas);
// })

app.listen(5000, function () {
  console.log(`App running on port ${ this.address().port }`);
});