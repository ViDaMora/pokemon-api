const Pokemon = require('../model/pokemon')
const {validationResult} = require('express-validator')
const {getPokemons,addPokemon,getPokemonByName,deletPokemon}=require('../service/PokemonService')
const { get } = require('mongoose')

let GetPokemons = async (req,res) =>{
    try {
        let pokemons = await getPokemons()
        if (!pokemons) {
            return res.json({msg:"There is not pokemons in the db"})
        }
        return res.json(pokemons)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error: '+ err.message)
    }
}

let AddPokemon = async (req,res) =>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {name,hp,damage,defense,image,elementtype} = req.body
    try {
            let pokemon = await getPokemonByName(name)
            if (pokemon) {
                return res.status(404).json({msg: "Pokemon already exists"})
            }
            pokemon = new Pokemon({name,hp,damage,defense,image,elementtype})
            await addPokemon(pokemon)
            return res.json({pokemon})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error: '+err.message)
    }
}

let DeletePokemon = async (req,res) =>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    let pokemonId = req.query.id
    try {
        if(!pokemonId){
            return res.json({msg:"Ingrese un Id valido"})
        }
        await deletPokemon(pokemonId)
        res.json({msg:"Pokemon removed"})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error: '+err.message)
    }
}

module.exports = {GetPokemons,AddPokemon,DeletePokemon}