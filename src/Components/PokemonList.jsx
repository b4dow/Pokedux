import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
    return (
        <div className="pokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name}  key={pokemon.name} image={pokemon.sprites.front_default} habilities={pokemon.abilities}/>
            })}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), // Un arreglo [''] de 10 posiciones
}


export default PokemonList