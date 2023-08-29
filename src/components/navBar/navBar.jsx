import React from "react";
import './styles.css'; 
import { Link } from 'react-router-dom';

export const Navbar=()=> {
  return (
    <html>
      <head>
        <title>Navbar</title>
      </head>
      <body>
        <nav className="navbar">
          <div className="navbar-brand">
            <a href="#" className="logo">Logo</a>
          </div>
          <ul className="navbar-menu">
            <li><Link className="navBarItem" to="/home">Inicio</Link></li>
            <li><Link className="navBarItem" to="/acerca">Acerca de</Link></li>
            <li><Link className="navBarItem" to="/servicios">Servicios</Link></li>
            <li><Link className="navBarItem" to="/login">Salir</Link></li>

          </ul>
        </nav>
        <main>
          <h1>
            Inicio
          </h1>
        </main>
      </body>
    </html>
  );
}

export default Navbar;
