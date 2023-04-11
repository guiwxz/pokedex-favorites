import { useContext } from "react";

import { PokemonsContext } from "./pokemonsProvider";

export const usePokemons = () => {
  const context = useContext(PokemonsContext);

  if (!context) {
    throw new Error(
      "usePokemons() deve estar dentro de um <PokemonsProvider />"
    );
  }

  return context;
};
