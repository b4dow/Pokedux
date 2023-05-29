import axios from 'axios'

export const getPokemon = () => {
    return axios('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.data.results)
    .catch(err => console.log(err))
}

export const getPokemonDetail = (pokemon) => {
    return axios(pokemon.url)
    .then(res => res.data)
    .catch(err => console.log(err))
}