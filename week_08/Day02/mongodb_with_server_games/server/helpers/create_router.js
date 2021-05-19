const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

  const router = express.Router();

  // NOTE - the / is the ending / - it gets the /api/games from server.js (localhost:5000/api/games) to view.
  // router.get('/', (req, res) => {
  //   // Test if the route is working.
  //   // res.send('Hello World')
  //   // Gets info from the database
  //   collection.find().toArray()
  //   .then((docs) => res.json(docs)) 
  //   .catch((err) => {
  //     console.error(err);
  //     res.status(500);
  //     res.json({ status: 500, error: err });
  // })

  // NOTE - req comes before res - always

  // Show Route
  // Remember in this case id looks like ...6087d7cdde90f48448a19e27 so route will be http://localhost:5000/api/games/6087d7cdde90f48448a19e27

  // router.get('/:id', (req, res) => {
  //   const id = req.params.id;
  //   collection.findOne({ _id: ObjectID(id) })
  //   .then((doc) => res.json(doc))
  // })

  // })

//   // POST Route
//   router.post('/', (req, res) => {
//     const newData = req.body;
//     collection
//     .insertOne(newData)
//     .then(() => collection.find().toArray())
//     // To see all of the results
//     .then((docs) => res.json(docs))
//     // To show only the new game which was added in the results - new entries to the database are always at 0 index
//     // FIXME - doesn;t work and crashes server on second click
//     // .then((result) => res.json(result.ops[0]))
//     // .catch((err) = {
//     //   console.error(err);
//     //   res.status(500);
//     //   res.json({ status: 500, error:err });
//     // })
//   })
//   // End Post Route


//   // Delete Route

// // FIXME - Crashes Server
// router.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   collection.deleteOne({ _id: ObjectID(id) })
//   .then((result) = res.json(result))
//   })
//   // End Delete Route


//   //UPDATE ROUTE
//   // TODO - To Be Added
//   //END UPDATE ROUTE

  return router;

};

module.exports = createRouter;
