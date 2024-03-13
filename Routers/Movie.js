var express = require('express');
var router = express.Router();
var controller = require('../Controllers/MovieController');


router.get('/api/movie',controller.get);
router.get('/api/movie/:id',controller.getById);
router.post('/api/movie',controller.post);
router.put('/api/movie/:id',controller.put);
router.delete('/api/movie/:id',controller.delete);



module.exports = router;