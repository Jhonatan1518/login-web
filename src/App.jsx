import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";
import { Home } from "./pages/Home/Home";
import Acerca from "./pages/Acerca/Acerca";
import Servicios from "./pages/Servicios/Servicios";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/acerca" element={<Acerca />} /> 
          <Route path="/servicios" element={<Servicios />} /> 
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
