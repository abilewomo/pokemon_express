const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
});

const pokemon = mongoose.model('Pokemon', PokemonSchema)

module.exports = pokemon