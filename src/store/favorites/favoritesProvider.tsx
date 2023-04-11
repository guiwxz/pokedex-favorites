import React from "react";
import { FavoritesContextSchema, FavoritesType } from "./favorites.types";

export const FavoritesContext = React.createContext<FavoritesContextSchema>(
  {} as FavoritesContextSchema
);

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favorites, setFavorites] = React.useState<{
    [key: string]: FavoritesType;
  }>(() => {
    if (!!localStorage.getItem("favorites")) {
      return JSON.parse(localStorage.getItem("favorites") as string);
    }

    return {};
  });

  const favoritePokemon = React.useCallback(
    (pokemon: FavoritesType) => {
      if (Object.values(favorites).length < 19) {
        setFavorites((curr) => {
          localStorage.setItem(
            "favorites",
            JSON.stringify({ ...curr, [pokemon.name]: pokemon })
          );

          return { ...curr, [pokemon.name]: pokemon };
        });
      }
    },
    [setFavorites, favorites]
  );

  const unFavoritePokemon = React.useCallback(
    (pokemonName: string) => {
      setFavorites((curr) => {
        const favoritesList = curr;
        delete favoritesList[pokemonName];

        localStorage.setItem("favorites", JSON.stringify(favoritesList));
        return { ...favoritesList };
      });
    },
    [setFavorites]
  );

  return (
    <FavoritesContext.Provider
      value={{
        favoritePokemon,
        unFavoritePokemon,
        favorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
