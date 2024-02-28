import React, { useState, useEffect } from 'react'

const Pokedex = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = async () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((res) => res.json())
            .then((data) => setPokemon(data.results))
    }

    useEffect(() => {
        fetchPokemon();
      }, []);

  return (
    <div>
        <ul className='pokedex'>
            {pokemon.map((pokemon) => {
                return (
                <li key={pokemon.name}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', alignContent: 'center', justifyContent: 'center'}}>
                        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
                            {pokemon.name.toUpperCase()}
                        </div>
                        <img 
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.substring(pokemon.url.length - 3, pokemon.url.length - 1)}.png`} 
                            alt={pokemon.name} />
                    </div>
                </li>
            )})}
        </ul>
    </div>
  )
}

export default Pokedex