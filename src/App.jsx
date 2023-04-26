import React, { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ModelS from "./pages/ModelS";
import Model3 from "./pages/Model3";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";
// import ModelS from "./pages/ModelS"
// import ModelS from "./pages/ModelS"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
      {/* <BrowserRouter>
        <Header />
      </BrowserRouter> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<ModelS />} />
          <Route path="/model3" element={<Model3 />} />
          <Route path="/modelx" element={<ModelX />} />
          <Route path="/modely" element={<ModelY />} />
          
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
