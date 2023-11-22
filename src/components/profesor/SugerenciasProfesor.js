import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const SugerenciasProfesor = () => {
  return (
      <div className="body">
        <Header title="Curso x"/>
        <div className="d-flex p-2 border-bottom mb-4">
            <Link to="/DetalleCursoProfesor"  className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
            
            <div className="w-100 text-center"><p >Sugerencias de clase</p></div>
           
        </div>

        <div>
            <div className="detalle-curso border-bottom pb-4">
                <i className="fa-solid fa-screwdriver-wrench icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left">
                    <p>Herramientas</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tortor hendrerit, varius lorem et, gravida odio. </p>
                </div>
            </div>
            <div className="detalle-curso border-bottom pb-4">
                <i className="fa-solid fa-laptop icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left">
                    <p>Tecnologías</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tortor hendrerit, varius lorem et, gravida odio. </p>
                </div>
            </div>
            <div className="detalle-curso border-bottom pb-4">
                <i className="fa-solid fa-arrows-rotate icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left">
                    <p>Dinámicas</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tortor hendrerit, varius lorem et, gravida odio. </p>
                </div>
            </div>
            <div className="detalle-curso border-bottom pb-4">
                <i className="fa-solid fa-pencil icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left">
                    <p>Actividades</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tortor hendrerit, varius lorem et, gravida odio. </p>
                </div>
            </div>
       
        </div>

        <Footer />
      </div>
  
   
  );
}

export default SugerenciasProfesor;
