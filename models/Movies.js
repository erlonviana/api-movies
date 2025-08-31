import mongoose, { mongo } from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    filmow_rating : String,
    genre: String
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie