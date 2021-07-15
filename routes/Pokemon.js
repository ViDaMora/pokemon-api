const express = require('express');
const {check} = require('express-validator')
let router = express.Router();
const {GetPokemons,AddPokemon,DeletePokemon} =require('../controller/PokemonController')

router.get('/pokemon',GetPokemons)
router.post('/pokemon',[
    check('name', 'Pokemon`s name must have 2 characteres at least').isLength({min: 2})
],AddPokemon )
router.delete('/pokemon',[
    check('id','Pokemon`s id must be valid')
],DeletePokemon)
module.exports = router
