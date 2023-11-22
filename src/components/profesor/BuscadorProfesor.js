import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const BuscadorProfesor = () => {
  return (
   
    <div className="body">
        <Header title="Buscador"/>

        <div className="d-flex p-2 border-bottom mb-4">
            <i className="fa-solid fa-magnifying-glass footer-icon align-self-center p-2"></i>
            <input type="text" className=" form-control text-center w-100" placeholder="Buscar por materia, profesor o colegio" />
        </div>
        <Footer />
    </div>

   
  );
}

export default BuscadorProfesor;
