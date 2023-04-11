import { FiHeart } from "react-icons/fi";
import { colorPalette } from "../../../config/colorPalette";
import {
  FavoriteButton,
  ListItemWrapper,
  ListTitle,
} from "./listContent.styles";

import pokeballImg from "../../../assets/pokeball.png";
import React from "react";
import { useLocalStorage } from "../../../store/favorites/useLocalStorage";
import { FavoritesType } from "../../../store/favorites/favorites.types";

interface ListContentProps extends FavoritesType {
  setOpenModal: ({
    open,
    values,
    title,
  }: {
    open: boolean;
    values: any;
    title: string;
  }) => void;
  index: number;
}

export const ListContent: React.FC<ListContentProps> = ({
  setOpenModal,
  index,
  ...props
}) => {
  const { favoritePokemon, unFavoritePokemon, favorites } = useLocalStorage();

  const handleClick = () => {
    if (favorites[props.name]) {
      unFavoritePokemon(props.name);
    } else {
      favoritePokemon(props);
    }
  };

  return (
    <ListItemWrapper key={props.name}>
      <img
        src={pokeballImg}
        height="180"
        width="180"
        onClick={() =>
          setOpenModal({
            open: true,
            title: props.name,
            values: { fav: !!favorites[props.name] },
          })
        }
      />
      <ListTitle>
        <span
          onClick={() => () =>
            setOpenModal({
              open: true,
              title: props.name,
              values: { fav: !!favorites[props.name] },
            })}
        >
          {props.name}
        </span>
        <FavoriteButton onClick={handleClick}>
          <FiHeart
            fill={favorites[props.name] ? colorPalette.blue[500] : "white"}
            color={colorPalette.blue[500]}
          />
        </FavoriteButton>
      </ListTitle>
    </ListItemWrapper>
  );
};
