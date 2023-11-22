import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const Favoritos = () => {
  return (
    <div className="body">
        <div className="blue-header">
            <h3>Favoritos</h3>
        </div>
        <div>
            <div className="d-flex justify-content-between p-2 border-bottom mb-4">
                <p>Mis cursos</p>
                <button className="btn3-grey">Ver todos</button>
            </div>
        </div>
        <div>
            <div className="materia-container border-bottom pb-4">
                <img src="../../assets/math.png" alt="" className="align-self-center" />
                <div className="text-left align-self-center">
                    <p className="fw-bolder">Matematica</p>
                    <p>Grangetto, Agustin</p>
                </div>
                <div href="cursoAlumno.html" className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </div>

            <div className="materia-container border-bottom pb-4">
                <img src="./assets/book.png" alt="" className="align-self-center" />
                <div className="text-left align-self-center">
                    <p className="fw-bolder" >Lengua</p>
                    <p>Viñuela, Sebastian</p>
                </div>
                <div href="cursoAlumno.html" className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </div>
            
            

        </div>
        <Footer />
    </div>
   
  );
}

export default Favoritos;
