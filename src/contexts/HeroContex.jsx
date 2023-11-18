import { createContext, useContext, useState } from "react";

const HeroContext = createContext();
import { getHeros } from "../services/api";

export function HeroProvider({ children }) {
  const [heroList, setHeroList] = useState([]);
  const [searchHero, setSearchHero] = useState("");

  const fetchHeroes = async () => {
    try {
      const heroRequest = await getHeros();
      setHeroList(heroRequest.data);
    } catch (error) {
      console.error("Erro ao buscar heróis:", error);
    }
  };

  return (
    <HeroContext.Provider
      value={{
        heroList,
        setHeroList,
        searchHero,
        setSearchHero,
        fetchHeroes,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
}

export const useHeroContext = () => {
  return useContext(HeroContext);
};
