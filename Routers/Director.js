const express = require('express');
var route = express.Router();

const controller = require('../Controllers/DirectorController');

route.get('/api/director',controller.getAll);
route.get('/api/director/:id',controller.getById);
route.post('/api/director',controller.post);
route.delete('/api/director/:id',controller.delete);
route.put('/api/director/:id',controller.put);



module.exports = route;