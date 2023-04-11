import React from "react";
import api from "../../services/api";
import { PokemonsType, PokemonsContextSchema } from "./pokemons.types";
import { useLocalStorage } from "../favorites/useLocalStorage";

export const PokemonsContext = React.createContext<PokemonsContextSchema>(
  {} as PokemonsContextSchema
);

export const PokemonsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [pokemons, setPokemons] = React.useState<PokemonsType>(
    {} as PokemonsType
  );
  const [page, setPage] = React.useState<number>(0);

  const { favorites } = useLocalStorage();

  const fetchPokemons = React.useCallback(
    async (params?: { onlyFavorites: boolean }) => {
      if (params?.onlyFavorites) {
        let array = Object.values(favorites);

        setPokemons({
          count: array.length,
          results: array,
          next: "",
          previous: "",
        });
      } else {
        try {
          const response = await api.fetchPokemons(page * 20);

          if (response && response.results) {
            if (page >= 1) {
              setPokemons((curr) => ({
                ...response,
                results: [...curr.results, ...response.results],
              }));
            } else {
              setPokemons(response);
            }
          }
        } catch (err) {
          console.warn(err);
        }
      }
    },
    [favorites, setPokemons, page, setPage]
  );

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        fetchPokemons,
        page,
        setPage,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};
