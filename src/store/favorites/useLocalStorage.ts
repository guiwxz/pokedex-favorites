import React from "react";
import { FavoritesContext } from "./favoritesProvider"


export const useLocalStorage = () => {
  const context = React.useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useLocalStorage() deve estar dentro de um <FavoritesProvider />"
    );
  }

  return context;
}