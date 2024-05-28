import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Pokemon = {
  name: string;
  sprites: {
    front_default: string;
  };
};

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [count, setCount] = useState(0);
  const [inc, setInc] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    async function startFetching() {
      setPokemon({} as Pokemon);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      if (!ignore) {
        setPokemon(data);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [id]);

  const handleClick = () => {
    setCount(count + inc);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInc(parseInt(event.target.value));
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{pokemon?.name}</dd>
      <dt>Picture</dt>
      <dd>
        <img src={pokemon?.sprites?.front_default} />
      </dd>
      <input type="number" value={inc} onChange={handleChange} />
      <button onClick={handleClick}>Next - {count}</button>
    </dl>
  );
}
