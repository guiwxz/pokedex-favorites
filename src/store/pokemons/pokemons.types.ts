
export interface PokemonsType {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[]
}

export interface PokemonsContextSchema {
  pokemons: PokemonsType;
  fetchPokemons: (params?: { onlyFavorites: boolean }) => Promise<void>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
}
