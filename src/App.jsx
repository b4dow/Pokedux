import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import Searcher from './Components/Searcher'
import PokemonList from './Components/PokemonList';
import { setPokemons } from './actions';
import { getPokemon, getPokemonDetail } from './api';
import './App.css'

function App() {

  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon()
      const pokemonDetailed = await Promise.all(pokemonsRes.map( pokemon => getPokemonDetail(pokemon) ))
      dispatch(setPokemons(pokemonDetailed))
    };
    fetchPokemons();
  }, [])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg" alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  )
}





export default App
