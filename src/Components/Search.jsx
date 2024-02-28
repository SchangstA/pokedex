import React, { useState, useEffect } from "react";

const Search = () => {
  const [input, setInput] = useState('')
  
  const [pokemon, setPokemon] = useState()

  const fetchPokemon = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch(() => setPokemon(null));
  };

  return (
    <div className="search">
      <div className="search-box">
        <input 
          type='text'
          placeholder="Search for a Pokemon" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button onClick={fetchPokemon} >Search</button>
      </div>
      <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
      {pokemon ? (
        <div id="pokemon-card">
          <h2>{pokemon.name.toUpperCase()}</h2>
          <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <p style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>Height: {pokemon.height}0cm</p>
          <p style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>Weight: {pokemon.weight / 10}kg</p>
        </div>
      ) : (
        <p>Pokemon not found</p>
      )}
      </div>
    </div>
  );
};
export default Search;
