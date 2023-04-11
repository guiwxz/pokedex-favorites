import styled from "styled-components"
import { colorPalette } from "../../config/colorPalette"

export const ListGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  width: 100%;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }

`

export const NoContentList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  color: ${colorPalette.blue[500]}
`