const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    year: { type: Date, required: true },
    duration: { type: Number, required: true },
    genre: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    nextAvailableDate: { type: Date }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;