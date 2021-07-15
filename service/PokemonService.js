const Pokemon = require('../model/pokemon')


let getPokemons = async () => {
    return await Pokemon.find({})
}

let addPokemon= async (pokemon) => {
    return await pokemon.save()
}

let getPokemonByName = async (name) => {
    return await Pokemon.findOne({name: name})
}

let deletPokemon = async (pokemonId)=>{
    return await Pokemon.deleteOne({_id:pokemonId})
}

module.exports.getPokemons = getPokemons
module.exports.addPokemon = addPokemon
module.exports.getPokemonByName = getPokemonByName
module.exports.deletPokemon = deletPokemon