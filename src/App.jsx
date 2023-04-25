import React, { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Home />
      </BrowserRouter>
    </>
  );
};

export default App;
