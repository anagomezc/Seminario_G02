import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';
import AuthService from '../../services/AuthService'


const PerfilProfesor = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        navigate('/LoginProfesor');
    };
  return (
      <div className="body">
        <Header title="Mi perfil"/>
        <div className="perfil-info p-4">
            <img src="../../assets/persona.jpg" alt="Logo" className="imagen-redonda" />
            <h3>CARLOS PEREZ</h3>
            <h4>carlos_perez@gmail.com</h4>
            <div className="botones-perfil">
                <h5>Editar datos de perfil</h5>
                <h5>Notificaciones</h5>
                <h5>Ayuda</h5>
                <h5  onClick={handleLogout}>Cerrar sesion</h5>
            </div>

        </div>

        <Footer />
      </div>
  
   
  );
}

export default PerfilProfesor;
