import { Container } from "./styles";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import { useHeroContext } from "../../contexts/HeroContex";

export function Navbar() {
  const { setSearchHero } = useHeroContext();

  return (
    <Container>
      <div></div>
      <TextField
        label="Buscar Heroi"
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setSearchHero(e.target.value)}
      />
    </Container>
  );
}
