const express = require('express');
const { getAllMovies, postMovie, updateMovie } = require('../controllers/movies');

const router = express.Router();


router.get('/movies', getAllMovies)
router.post('/movies', postMovie);
router.put("/movies/:id", updateMovie)


module.exports = router;
