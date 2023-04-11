import { useNavigate } from "react-router";
import { Container, HomeLabel, Content } from "./home.styles";
import Button from "../../components/Button";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <HomeLabel>Cace seus pokémons e veja suas habilidades!</HomeLabel>
        <Button
          onClick={() => {
            navigate("/list");
          }}
        >
          Abrir pokedex
        </Button>
      </Content>
    </Container>
  );
};
