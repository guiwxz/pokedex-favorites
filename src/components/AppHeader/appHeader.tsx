import { Container } from "./appHeader.styles";

import logoImg from "../../assets/poke_logo.png";

export const AppHeader: React.FC<React.PropsWithChildren> = () => (
  <Container>
    <img src={logoImg} width={380} height={140} />
  </Container>
);
