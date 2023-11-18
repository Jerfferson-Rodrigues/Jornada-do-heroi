import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, TextField } from "@mui/material";
import { HeroCard } from "../../components/HeroCard";
import { GiArena } from "react-icons/gi";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import { Container } from "./styles";

import { getHeros } from "../../services/api";
import { useHeroContext } from "../../contexts/HeroContex";

const HeroList = () => {
  const { heroList, fetchHeroes, searchHero } = useHeroContext();
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [open, setOpen] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleOpenModal = () => {
    if (selectedHeroes.length === 2) {
      const winnerHero = compareHeroes(selectedHeroes);
      setWinner(winnerHero);
      setOpen(true);
    }
  };

  const handleCloseModal = () => {
    setOpen(false);
    setWinner(null);
    setSelectedHeroes([]);
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  const filteredHeroes = heroList.filter((hero) =>
    hero.name.toLowerCase().includes(searchHero.toLowerCase())
  );

  const handleCardClick = (hero) => {
    // Verifica se o card já está selecionado
    const isCardSelected = selectedHeroes.some((c) => c.id === hero.id);

    if (isCardSelected) {
      // Remove o card anteriormente selecionado
      const newselectedHeroes = selectedHeroes.filter((c) => c.id !== hero.id);
      setSelectedHeroes([...newselectedHeroes, { ...hero, isSelected: true }]);
    } else {
      // Certifique-se de que não há mais de 2 cards selecionados
      if (selectedHeroes.length < 2) {
        setSelectedHeroes([...selectedHeroes, { ...hero, isSelected: true }]);
      }
    }
  };

  const compareHeroes = (selectedHeroes) => {
    // Lógica para calcular a soma dos powerstats de cada herói
    const calculateTotalStats = (hero) => {
      const { intelligence, strength, speed, durability, power, combat } =
        hero.powerstats;
      return intelligence + strength + speed + durability + power + combat;
    };

    // Comparação com base na soma total dos powerstats
    const winnerHero = selectedHeroes.reduce((prev, current) =>
      calculateTotalStats(prev) > calculateTotalStats(current) ? prev : current
    );

    return winnerHero;
  };

  return (
    <>
      <Container>
        {filteredHeroes.map((hero) => (
          <HeroCard
            key={hero.id}
            hero={hero}
            handleCardClick={handleCardClick}
            isSelected={
              selectedHeroes.find((c) => c.id === hero.id) !== undefined
            }
          />
        ))}
      </Container>
      <Button
        variant="contained"
        onClick={handleOpenModal}
        disabled={selectedHeroes.length !== 2}
        style={{ position: "fixed", top: "30px", left: "20px", zIndex: 1000 }}
      >
        COMBATE <GiArena />
      </Button>
      <Modal open={open} onClose={handleCloseModal}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "900px",
            backgroundColor: "black",
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" mb={2}>
            Resultado
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {selectedHeroes.map((hero) => (
              <div
                key={hero.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={hero.images.sm}
                  alt={hero.name}
                  style={{
                    marginBottom: "8px",
                    borderRadius: "1rem",
                  }}
                />
                <Typography
                  variant="body1"
                  style={{ color: "#E8590C" }}
                >{`${hero.name}`}</Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <div>
                    <Typography variant="body2">{`Strength: ${hero.powerstats.strength}`}</Typography>
                    <Typography variant="body2">{`Intelligence: ${hero.powerstats.intelligence}`}</Typography>
                    <Typography variant="body2">{`Speed: ${hero.powerstats.speed}`}</Typography>
                    <Typography variant="body2">{`Durability: ${hero.powerstats.durability}`}</Typography>
                    <Typography variant="body2">{`power: ${hero.powerstats.power}`}</Typography>
                    <Typography variant="body2">{`combat: ${hero.powerstats.combat}`}</Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Typography variant="body1" style={{ color: "#89DD13" }}>
            <br />

            {winner
              ? `WINNER ${winner.name}! `
              : "Nenhum vencedor selecionado."}
          </Typography>
        </div>
      </Modal>
    </>
  );
};

export default HeroList;
