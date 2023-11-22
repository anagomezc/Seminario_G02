import React from 'react';
import { Link } from 'react-router-dom';

/* import '../../styles//styles.css'; 
import '../../styles/perfil.css' */

import '../../styles/login.css'

const Login = () => {
  return (
   
    <div className="login-container">
        <div className="background-shadow">
            <div class ="welcome">
            <h2 className="tac">Bienvenido</h2>
            <br/>
            <h3 className="tac">Registro como profesor</h3>
            </div>
            <div>
            <form action="" className="login-form">
                <input type="text" placeholder="Nombre completo" />
                <input type="text" placeholder="Usuario" />
                <input type="text" placeholder="Contrasena" />
                <input type="button" value="Registrarme" className="boton text-center" />              
            </form>
            </div>

            <div className="buttons-login">
                <Link to="/LoginProfesor" className="boton boton-a">Login</Link>
                <Link to="/LoginAlumno" className="boton boton-a">Ingresar como alumno</Link>
            </div>
        </div>
    </div>
   
  );
}

export default Login;
