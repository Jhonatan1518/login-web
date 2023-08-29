import React from 'react';
import './styles.css'; 
import { Link } from 'react-router-dom';
import Llave from "../../assets/IMG/llave.png";
import Usuario from "../../assets/IMG/usuario.png";

const Login = () => {
  return (
    <>
    <main>
      <div className="main">
        <div className="card_main">
          <div className="cardinfo">
            <h1>
              Welcome
            </h1>
            <h3>
              to the website
            </h3>
            <p>Esta es la mejor pagina web creada en el mundo</p>
          </div>

          <div className="cardform">
            <h2>USER LOGIN</h2>
            <div className="inputContainer">
              <img src={Usuario} alt="User" />
              <label htmlFor="username">
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                />
              </label>
            </div>
            <div className="inputContainer">
              <img src={Llave} alt="Password" />
              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </label>
            </div>
            <div className="forgot">
              <a href="#"> Olvide mi contraseña</a>
            </div>
            <Link className="button" to="/home">Login</Link>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default Login;
