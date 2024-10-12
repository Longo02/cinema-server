const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String, 
    year: Date, 
    duration: int, 
    genre: String, 
    isAvaible: {
        type: Boolean,
        default: false,
    }, 
    nextAvaibleDate: Date
})

const Movie = mongoose.Model('Movie', movieSchema)

module.exports = Movie;