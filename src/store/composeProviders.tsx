import { PokemonsProvider } from "./pokemons/pokemonsProvider";
import { FavoritesProvider } from "./favorites/favoritesProvider";

const composeProviders =
  (
    ...providers: Array<
      React.JSXElementConstructor<React.PropsWithChildren<any>>
    >
  ) =>
  ({ children }: any) =>
    providers.reduceRight(
      (childrenProvider, Provider) => <Provider>{childrenProvider}</Provider>,
      children
    );

export const ComposedProviders = composeProviders(
  FavoritesProvider,
  PokemonsProvider
);
