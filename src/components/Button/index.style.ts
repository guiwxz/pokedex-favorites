import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const StyledButton = styled.button`
  border: none;
  background-color: ${colorPalette.blue[500]};
  padding: 16px;
  border-radius: 60px;
  border: 3px solid transparent;
  transition: .4s;

  outline: none;

  &:hover {
    border-color: ${colorPalette.secondary[200]};
  }

  &:focus { 
    outline: 1px solid ${colorPalette.secondary[500]}; 
  }
`