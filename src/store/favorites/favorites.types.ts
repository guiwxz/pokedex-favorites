import { PokemonsType } from "../pokemons/pokemons.types";

export type FavoritesType = {
  name: string;
  url: string;
}

export interface FavoritesContextSchema {
  favoritePokemon: (pokemon: FavoritesType) => void;
  unFavoritePokemon: (pokemonName: string) => void;
  favorites: { [key: string]: FavoritesType };
}