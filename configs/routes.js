const express = require('express');
const { getAllMovies, postMovie } = require('../controllers/movies');

const router = express.Router();


router.get('/movies', getAllMovies)
router.post('/movies', postMovie);



module.exports = router;
