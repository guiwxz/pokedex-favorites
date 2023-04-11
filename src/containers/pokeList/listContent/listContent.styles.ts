import styled from "styled-components";
import { colorPalette } from "../../../config/colorPalette";

export const ListItemWrapper = styled.div`
  max-width: 240px;
  padding: 8px;
  border: 2px solid transparent;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  transition: 0.3s;

  &:hover {
    border: 2px solid ${colorPalette.blue[100]};
    cursor: pointer;
  }
`;

export const ListTitle = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
  margin-top: 12px;
  color: ${colorPalette.primary[700]};
`;

export const FavoriteButton = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:hover {
    background-color: ${colorPalette.primary[100]};
  }
`;
