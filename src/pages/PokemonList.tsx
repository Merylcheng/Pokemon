// const [pokemons, setPokemons] = useState();

import { useEffect, useState } from "react";
import type { Pokemon } from "../Pokemon";
import PokemonCard from "./PokemonCard";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function startFetching() {
      setPokemons([]);
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      if (!ignore) {
        setPokemons(data.results);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
      <PokemonCard name="ditto" img="" />
    </ul>
  );
}
