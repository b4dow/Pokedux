import { SET_POKEMONS } from "./types"
import { getPokemonDetail } from "../api"


export const setPokemons = (payload) => {
    return ({
        type: SET_POKEMONS,
        payload
    })
}

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonDetailed = await Promise.all(pokemons.map( pokemon => getPokemonDetail(pokemon) ))
    dispatch(setPokemons(pokemonDetailed))
}