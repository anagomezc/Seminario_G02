import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import {IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';
import { CircularProgress } from '@mui/material'; // Import CircularProgress component

const DetalleCursoAlumno = (props) => {

    const { id: cursoId } = useParams();  
    const cursoIdEntero = parseInt(cursoId);
  
    const [curso, setCurso] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        if (isNaN(cursoIdEntero)) {
          console.error('Error: cursoId no es un número válido.');
          setLoading(false);
          return;
        }
  
        try {
          let response = await fetch(`https://teach-track-backend.onrender.com/cursos/${cursoIdEntero}`);
          let data = await response.json();
          console.log("RECIBIDO", data);
          setCurso(data);
        } catch (error) {
          console.error('Error en la solicitud:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [cursoIdEntero]);

  return (
      <div className="body">
        <Header title={curso && curso[0].materia} />
        <div className="d-flex p-4 border-bottom mb-4">
            <Link to="/HomeAlumno" href="homeAlumno.html" className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
            
            <div className="w-100 text-center"><p >Información del curso</p></div>
           
        </div>
        {loading ? (
                <CircularProgress /> // Use CircularProgress while loading
            ) : (
        curso && (
        <div>
            <div className="detalle-curso border-bottom pb-4">
            <i class="fa-solid fa-school fa-4 icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left">
                    <p className="fw-bolder">Colegio</p>
                    <p>{curso[0].colegio.nombre}</p>
                </div>
            </div>
            <div className="detalle-curso border-bottom pb-4">
                            <i class="fa-solid fa-pencil fa-4 icon-img align-self-center detalle-curso-icon"></i>
                            <div className="text-left">
                                <p className="fw-bolder">Materia</p>
                                <p>{curso[0].materia}</p>
                            </div>
                        </div>
            <div className="detalle-curso border-bottom pb-4">
                <i class="fa-solid fa-graduation-cap icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left">
                    <p className="fw-bolder">Curso</p>
                    <p>{curso[0].anio_cursado}° "{curso[0].division}"</p>
                </div>
            </div>
            <div className="detalle-curso border-bottom pb-4">
                <i className="fa-solid fa-users icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left">
                    <p className="fw-bolder">Cantidad de alumnos</p>
                    <p>{curso[0].estudiantes.length}</p>
                </div>
            </div>

            <div>
                <div className="detalle-curso border-bottom pb-4">
                    <i className="fa-regular fa-star icon-img align-self-center detalle-curso-icon"></i>
                    
                    <div className="text-left align-self-center">
                        <p className="fw-bolder align-items-center">Añadir a favoritos</p>
                    </div>
                </div>
            </div>
            <Link to={`/OpinionAlumno/${curso[0].codigo}`} href="opinionAlumno.html">
            <div className="detalle-curso border-bottom pb-4">
                            <i className="fa-regular fa-comment-dots icon-img align-self-center detalle-curso-icon"></i>
                            <div className="text-left-pr">
                                <p className="fw-bolder">Opinar</p>
                                <p>Opine de su clase y ayude a su profesor a identificar oportunidades de mejora.</p>
                            </div>
                            <div className="align-self-center">
                                <IconButton component="span" size="large" style={{ fontSize: 32 }} color="primary">
                                    <ArrowForwardIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                        </div></Link>
            
            
        </div>
))}
        <Footer />
      </div>
  
   
  );
}

export default DetalleCursoAlumno;
