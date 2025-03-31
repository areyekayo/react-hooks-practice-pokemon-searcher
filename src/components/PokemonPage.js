import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  //initial fetch to get pokemon data
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => setPokemon(data))
  }, [])

  //function to handle search events
  function handleSearch(event) {
    setSearch(event.target.value)
  }
  //function to handle adding new pokemon to state
  function addNewPokemon(newPokemon) {
    setPokemon([...pokemonList, newPokemon])
  }

  //filter pokemon searches to display
  const pokemonToDisplay = pokemonList.filter((pokemon) => {
    const name = pokemon.name
    if (!search){
      return true;
    }
    else {
      return name.includes(search) || search === "";
    }
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={addNewPokemon}/>
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
