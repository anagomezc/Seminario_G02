import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


/* import '../../styles//styles.css'; 
import '../../styles/perfil.css' */

import '../../styles/login.css'
import AuthService from '../../services/AuthService'

const LoginAlumno = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        const userType = 'alumno'; 
        const isSuccess = AuthService.login(username, password);

        if (isSuccess) {
        navigate('/HomeAlumno');
        } else {
        setError('Credenciales incorrectas. Por favor, intenta de nuevo.');
        }
    };


  return (
   
    <div className="login-container">
        <div className="background-shadow">
            <div class ="welcome">
            <h2 className="tac">Bienvenido</h2>
            <br/>
            <h3 className="tac">Login como alumno</h3>
            </div>
            <div>
            <form action="" className="login-form">
            {error && <p className="error-message">{error}</p>}
                <input type="text" placeholder="Usuario"  
                value={username}       
                onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña"  
                value={password}
                 onChange={(e) => setPassword(e.target.value)} />
                <input type="button" value="Ingresar" className="boton text-center"  onClick={handleLogin}/>              
            </form>
            </div>

            <div className="buttons-login">
                <Link to="/RegistroAlumno" className="boton boton-a">Registrarme</Link>
                <Link to="/" className="boton boton-a">Ingresar como profesor</Link>
            </div>
        </div>
    </div>
   
  );
}

export default LoginAlumno;
