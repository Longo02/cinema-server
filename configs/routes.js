const express = require('express');
const { getAllMovies, postMovie, updateMovie, deleteMovie } = require('../controllers/movies');

const router = express.Router();


router.get('/movies', getAllMovies);
router.post('/movies', postMovie);
router.put('/movie/:id', updateMovie);
router.delete("/movie/:id", deleteMovie);

//router.getBy('/movie/:', getBy);
//router.delete('/movie/:id', deleteMovie);


module.exports = router;
