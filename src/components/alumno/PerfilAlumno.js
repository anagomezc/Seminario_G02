import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../styles/styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';
import AuthService from '../../services/AuthService'


const PerfilAlumno = () => {
    const navigate = useNavigate();
    const user = AuthService.getUserData();
    console.log("RECIBIDO", user);
    useEffect(() => {
        const fetchData = async () => {
          const user = AuthService.getUserData();
          const userId = user.id;
    
        };
    
        fetchData();
      }, []);
    const handleLogout = () => {
        AuthService.logout();
        navigate('/LoginAlumno');
    };
  return (
      <div className="body">
        <Header title="Mi perfil"/>
        <br>
        </br>
        <br></br>
        <div className="perfil-info p-4">
        <i class="fa-regular fa-user fa-2xl"></i>
        <br></br>
            <h3>{user.username}</h3>
            <h4>{user.userType}</h4>
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

export default PerfilAlumno;
