import React, { useState } from 'react';
import './styles.css'; 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Llave from "../../assets/IMG/llave.png";
import Usuario from "../../assets/IMG/usuario.png";

const Login = () => {
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.username === loginData.username && storedUserData.password === loginData.password) {
      setLoggedIn(true);
      console.log('Inicio de sesión exitoso');
      history('/home');
      
    } else {
      setLoggedIn(false);
      console.log('Credenciales incorrectas');
    }
  };
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
            <p>Ingrese ususario y contraseña para continuar</p>
          </div>

          <div className="cardform">
            <h2>USER LOGIN</h2>
            <div className="inputContainer">
              <img src={Usuario} alt="User" />
              <label htmlFor="username">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={loginData.username}
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
                  value={loginData.password}
                 onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="forgot">
              <h5>¿No tienes cuenta?</h5>
              <Link to="/register"> Registrarse</Link>
            </div>
            <button className="button" onClick={handleLogin} to="/home">Login</button>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default Login;
