import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'
import AuthService from '../../services/AuthService'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const HomeAlumno = () => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        (async () => {
            const user = AuthService.getUserData();
            const userId = user.id

          try {
            let response = await fetch(`https://teach-track-backend.onrender.com/cursos/estudiantes/${userId}`);
            let data = await response.json();
/*             console.log("RECIBIDO", data);
 */            setCursos(data)
          } catch (error) {
            console.error('Error en la solicitud:', error);
          }
        })();
    }, []);

  return (
      <div className="body">
        <Header title="Mis cursos"/>
        <div>
            <div className="d-flex justify-content-between p-2 border-bottom mb-4">
                <p>2023</p>
                <button className="btn3-grey">Ver todos</button>
            </div>
        </div>

        <div>
            {cursos.map((curso) => (
            <Link  to={`/DetalleCursoAlumno/${curso.codigo}`} key={curso.codigo} className="materia-container border-bottom pb-4">
                {/* Puedes personalizar la información mostrada en cada curso según tus necesidades */}
                <i className="fa-solid fa-book icon-img align-self-center"></i>
                <div className="text-left">
                    <p className="fw-bolder">{curso.materia}</p>
                    <p>{curso.profesor.nombre} {curso.profesor.apellido}</p>
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>

            ))}
            {/* <Link  to="/DetalleCursoAlumno" className="materia-container border-bottom pb-4">
                <i className="fa-solid fa-calculator icon-img align-self-center"></i>            
                <div className="text-left">
                    <p className="fw-bolder">Matematica</p>
                    <p>Grangetto, Agustin</p>
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>

            <Link  to="/DetalleCursoAlumno" className="materia-container border-bottom pb-4">
                <i className="fa-solid fa-book icon-img align-self-center"></i>
                <div className="text-left">
                    <p className="fw-bolder" >Lengua</p>
                    <p>Viñuela, Sebastian</p>
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>

            <Link  to="/DetalleCursoAlumno" className="materia-container border-bottom pb-4">
                <i className="fa-solid fa-paint-roller icon-img align-self-center"></i>
                <div className="text-left">
                    <p className="fw-bolder">Arte</p>
                    <p>Falcon, Ignacio</p>
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>
            <Link  to="/DetalleCursoAlumno" className="materia-container border-bottom pb-4">
                <i className="fa-solid fa-vial icon-img align-self-center"></i>
                <div className="text-left">
                    <p className="fw-bolder">Quimica</p>
                    <p>Falcon, Ignacio</p>
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>
            <Link  to="/DetalleCursoAlumno" className="materia-container border-bottom pb-4">
                <i className="fa-solid fa-calculator icon-img align-self-center"></i>            
                <div className="text-left">
                    <p className="fw-bolder">Matematica</p>
                    <p>Grangetto, Agustin</p>
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>

            <Link to="/DetalleCursoAlumno" className="materia-container border-bottom pb-4">
                <i className="fa-solid fa-book icon-img align-self-center"></i>
                <div className="text-left">
                    <p className="fw-bolder" >Lengua</p>
                    <p>Viñuela, Sebastian</p>
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>

            <Link  to="/DetalleCursoAlumno" className="materia-container border-bottom pb-4">
                <i className="fa-solid fa-paint-roller icon-img align-self-center"></i>
                <div className="text-left">
                    <p className="fw-bolder">Arte</p>
                    <p>Falcon, Ignacio</p>
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>
            <Link  to="/DetalleCursoAlumno" className="materia-container border-bottom pb-4">
                <i className="fa-solid fa-vial icon-img align-self-center"></i>
                <div className="text-left">
                    <p className="fw-bolder">Quimica</p>
                    <p>Falcon, Ignacio</p>
                </div>
                <i className="fa-solid fa-arrow-right align-self-center"></i>
            </Link> */}

         </div>
         <Footer />

      </div>
  
   
  );
}

export default HomeAlumno;
