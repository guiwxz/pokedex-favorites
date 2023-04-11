import styled from "styled-components";
import { colorPalette } from "../../config/colorPalette";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
`

export const ListTab = styled.div`
  height: 40px;
  width: auto;
  color: #fff;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;

  @media (max-width: 570px) {
    flex-direction: column-reverse;
    padding-top: 28px;
  }

  @media (max-width: 360px) {
    flex-direction: column-reverse;
    padding-top: 80px;
  }
  
`;

export const TabContent = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 360px) {
    flex-direction: column;
  }

`

interface ActiveTab {
  active?: boolean;
}

export const TabItem = styled.div<ActiveTab>`
  width: 140px;
  background-color: ${({ active }) =>
    active ? colorPalette.blue[100] : colorPalette.blue[100]};
  height: 36px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 100px;
  border: ${({ active }) => active ? `2px solid ${colorPalette.blue[500]}` : '2px solid transparent'};
  color: ${colorPalette.blue[800]};
  font-weight: 400;
  transition: .4s;

  &:hover {
    border: ${({ active }) => active ? '' : `2px solid ${colorPalette.blue[500]}`};
  }
`;

export const TabItemLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 18px;
`;

export const HomeButton = styled.div`
  width: 90px;
  color: ${colorPalette.primary[300]}; 
  display: flex; 
  align-items: center; 
  gap: 8px;
  margin-bottom: 8px;
  border: 1px solid ${colorPalette.primary[300]};
  border-radius: 100px;
  padding: 4px 8px;

  &:hover{ 
    cursor: pointer;
  }
`

export const LoadContent = styled.div`
  margin: 30px;

`