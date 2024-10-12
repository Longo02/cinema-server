const express = require('express');
const { getAllMovies } = require('../controllers')

const router = express.Router();


router.get('/movies', getAllMovies)


router.post('/movies/', async(req, res) => {
    let {title, description, year, duration, genre, isAvaible, nextAvaibleDate} = req.body
    const moviePayload = {title, description, year, duration, genre, isAvaible, nextAvaibleDate}
    try{
        const movie = new Movie(moviePayload)
        await movie.save()
        res.json(movie)
    } catch (error){
        res.status(500).json({ message: 'error al cargar en la base de datos'})
    }
});



module.exports = router;
