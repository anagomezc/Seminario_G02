import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import '../../styles/styles.css';
import '../../styles/perfil.css';
import AuthService from '../../services/AuthService';

import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';

const HomeProfesor = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const user = AuthService.getUserData();
      const userId = user.id;

      try {
        setLoading(true);
        let response = await fetch(`https://teach-track-backend.onrender.com/cursos/profesores/${userId}`);
        let data = await response.json();
        console.log("RECIBIDO", data);
        setCursos(data);
      } catch (error) {
        console.error('Error en la solicitud:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <Header title="Mis cursos" />
      <div>
        <div className="d-flex justify-content-between p-4 border-bottom mb-4">
          <p>2023</p>
        </div>
      </div>

      {loading ? (
        <CircularProgress /> // Use CircularProgress while loading
      ) : (
        cursos.map((curso) => (
          <Link to={`/DetalleCursoProfesor/${curso.codigo}`} key={curso.codigo} className="materia-container border-bottom pb-4">
            {/* Puedes personalizar la información mostrada en cada curso según tus necesidades */}
            <i className="fa-solid fa-book icon-img align-self-center"></i>
            <div className="text-left">
              <p className="fw-bolder">{curso.materia}</p>
              <p>{curso.anio_cursado}° "{curso.division}"</p>
              <p>{curso.colegio.nombre}° "{curso.division}"</p>
            </div>
            <div className="align-self-center">
              <IconButton component="span" size="large" style={{ fontSize: 32 }} color="primary">
                <ArrowForwardIcon fontSize="inherit" />
              </IconButton>
            </div>
          </Link>
        ))
      )}

      <Footer />
    </div>
  );
};

export default HomeProfesor;
