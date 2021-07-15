const mongoose = require('mongoose')

const PokemonSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required.'],
        unique: [true, 'Name must be unique.'],
        minLength: [2, 'The minimum length of the pokemon`s name is 2 characters'],
        lowercase: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    hp:{
        type: Number,
        required: [true, 'Hp is required.'],
        min: [20, 'The HP must be higher than 20'],
        max: [200, 'The HP must be lower than 200'],
    },
    damage:{
        type: Number,
        min: [1, 'The damage must be higher than 0'],
        max: [100, 'The damage must be lower than 100'],
    },
    defense:{
        type: Number,
        min: [1, 'The defense must be higher than 1'],
        max: [100, 'The defense must be lower than 100'],
    },
    image:{
        type: String,
        minLength: [10, 'The url must have at least 10 characters']
    },
    elementtype:{
        type: String,
        min: [3, 'The element type must have at least 3 characters'],
    }

})
module.exports=mongoose.model('pokemon',PokemonSchema);