import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
};

export default App;
