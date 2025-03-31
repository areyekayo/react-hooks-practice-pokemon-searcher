import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((item) => <PokemonCard key={item.id} id={item.id} name={item.name} hp={item.hp} sprites={item.sprites} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
