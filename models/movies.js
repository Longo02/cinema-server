const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String, 
    year: Date, 
    duration: BigInt, 
    genre: String, 
    isAvaible: {
        type: Boolean,
        default: false,
    }, 
    nextAvaibleDate: Date
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;