const express = require('express');

const createRouter = function (data) {
    // Creates a new Router 
    const router = express.Router();
    // Functions copied from server.js
// Putting the functions into this file means they can be generalised
// To Gerealise - change to Router and change the routes to / etc and replace tea with data
    router.get('/', (req, res) => {
        res.json(data);
    });

    router.post('/', (req, res) => {
        console.log('Request Body:', req.body);
        data.push(req.body);
        // This line will return in insomnia to show that it has worked - before this line is added insomnia will just timeout.
        res.json(data);
    })

    router.put('/:id', (req, res) => {
        const index = req.params.id;
        // returns the updated version of the tea that is updated.
        data[index] = req.body;
        res.json(data);
    })

    router.get('/:id', (req, res) => {
        // Gets the index
        const index = req.params.id;
        res.json(data[index]);
    })

    router.delete('/:id', (req, res) => {
        const index = req.params.id; 
        // data.splice(data[index]);
        data.splice(index, 1);
        res.json(data)
    })


    return router;
}

module.exports = createRouter;