import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgress, IconButton, Button } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/system/Box';


import '../../styles/styles.css';
import '../../styles/perfil.css';
import AuthService from '../../services/AuthService';

import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';

const HomeAlumno = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const user = AuthService.getUserData();
      const userId = user.id;

      try {
        setLoading(true);
        let response = await fetch(`https://teach-track-backend.onrender.com/cursos/estudiantes/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
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
          <Button className="btn3-grey">Ver todos</Button>
        </div>
      </div>

      <div>
        {loading ? (
          <CircularProgress />
        ) : (
          cursos.map((curso) => (
            <Link to={`/DetalleCursoAlumno/${curso.codigo}`} key={curso.codigo} className="materia-container border-bottom pb-4">
              <i className="fa-solid fa-book icon-img align-self-center"></i>
              <div className="text-left align-self-cen">
                <p className="fw-bolder">{curso.materia}</p>
                <p>{curso.profesor.nombre} {curso.profesor.apellido}</p>
              </div>
              <div >
                <Box sx={{
                  position: 'relative',
                  alignSelf: 'center'
                }}>
                    <IconButton  component="span" size="large" style={{ fontSize: 32, alignSelf: 'center' }} color="primary">
                <ArrowForwardIcon fontSize="inherit" />
              </IconButton>
                </Box>
             
            </div>
            </Link>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HomeAlumno;
