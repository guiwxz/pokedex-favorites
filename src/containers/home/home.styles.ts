import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  
`

export const HomeLabel = styled.span`
  color: ${colorPalette.secondary[200]};
  font-weight: bold;
  font-size: 28px;
`