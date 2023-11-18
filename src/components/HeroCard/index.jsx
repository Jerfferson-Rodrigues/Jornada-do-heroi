import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";

import { GiBrain } from "react-icons/gi";
import { FcUpload } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import { Container } from "./styles";

export function HeroCard({ hero, handleCardClick, isSelected }) {
  if (!hero || !hero.images) {
    return null;
  }

  return (
    <Container>
      <Card
        component="card"
        key={hero.id}
        onClick={() => handleCardClick(hero)}
        sx={{
          cursor: "pointer",
          border: isSelected ? "2px solid red" : "2px solid transparent",
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={hero.images.sm} alt={hero.name} />
          <CardContent
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {hero.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              <GiBrain /> Inteligência: {hero.powerstats.intelligence}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              <FcUpload />
              Força: {hero.powerstats.strength}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="p">
              <FcFlashOn />
              Velocidade: {hero.powerstats.speed}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
