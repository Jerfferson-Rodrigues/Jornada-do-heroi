import React from "react";

import { HeroProvider } from "./contexts/HeroContex";
import { Navbar } from "./components/Navbar";
import HeroList from "./pages/HeroList";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <Theme>
      <HeroProvider>
        <Navbar />
        <HeroList />
      </HeroProvider>
      <GlobalStyle />
    </Theme>
  );
}
