import React, { useState } from 'react';
import './styles.css'; 
import { useNavigate } from 'react-router-dom';
import Llave from "../../assets/IMG/llave.png";
import Usuario from "../../assets/IMG/usuario.png";

export const Registro=()=> {
    const history = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Usuario registrado:', userData);
    history('/');
  };

  return (
    <main>
      <div className="main">
        <div className="card_main">
        <div className="cardinfo">
            <h1>
              Bienvenido
            </h1>
            <h3>
              al Registro
            </h3>
            <p>Escribe tu usuario y contraseña para registrar.</p>
          </div>
          <div className="cardform"> 
            <h2>USER REGISTRATION</h2>
            <div className="inputContainer">
            <img src={Usuario} alt="User" />
              <label htmlFor="username">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={userData.username}
                onChange={handleInputChange}
              />
              </label>
            </div>
            <div className="inputContainer">
            <img src={Llave} alt="Password" />
              <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={userData.password}
                onChange={handleInputChange}
              />
              </label>
            </div>
            <button className="button" onClick={handleSubmit}>Registrar</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Registro;