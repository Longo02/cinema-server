const express = require('express');
const { getAllMovies, postMovie, updateMovie, deleteMovie, filterGenre } = require('../controllers/movies');

const router = express.Router();


router.get('/movies', getAllMovies);
router.post('/movies', postMovie);
router.put('/movie/:id', updateMovie);
router.delete("/movie/:id", deleteMovie);
router.get("/movie/GetBy", filterGenre ) ;

//router.getBy('/movie/:', getBy);
//router.delete('/movie/:id', deleteMovie);


module.exports = router;
