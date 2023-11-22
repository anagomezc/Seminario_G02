import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';
import AuthService from '../../services/AuthService'

const PerfilAlumno = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        navigate('/LoginAlumno');
    };

  return (
      <div className="body">
        <Header title="Alumno"/>
        <div className="perfil-info p-4">
           {/*  <img src="../../assets/persona.jpg" alt="Logo" className="imagen-redonda" /> */}
           {/*  <h3>CARLOS PEREZ</h3>
            <h4>carlos_perez@gmail.com</h4> */}
            <div className="botones-perfil">
               {/*  <h5>Editar datos de perfil</h5> */}
               {/*  <h5>Notificaciones</h5> */}
                <h5>Ayuda</h5>
                <button type="submit" className="btn2" onClick={handleLogout}>
                    Cerrar sesion
                </button>
               
            </div>

        </div>

        <Footer />
      </div>
  
   
  );
}

export default PerfilAlumno;
