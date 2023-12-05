import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

import '../../styles/styles.css';
import '../../styles/perfil.css';

import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';

const FormularioProfesor = (props) => {
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
      <Header title="Curso x" />
      <div className="d-flex p-4 border-bottom mb-4">
        <Link to={`/DetalleCursoProfesor/${cursoId}`} className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
        <div className="w-100 text-center"><p>Preguntas del curso</p></div>
      </div>

      <div>
        {loading ? (
          <div className="text-center">
            <CircularProgress />
          </div>
        ) : (
          <div>
            {curso && Array.isArray(curso[0].preguntas) && curso[0].preguntas.map((pregunta, index) => (
              <div className="d-flex flex-row text-left p-3" key={index}>
                <label htmlFor={`pregunta-${index}`} className="labelForm">{pregunta.texto}</label>
                <input type="checkbox" className="fs-1" style={{ width: '10%' }} id={`pregunta-${index}`} checked disabled />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default FormularioProfesor;
