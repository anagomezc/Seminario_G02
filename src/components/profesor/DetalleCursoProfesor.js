import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CircularProgress, Tooltip } from '@mui/material'; // Import CircularProgress component
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';

import '../../styles//styles.css';
import '../../styles/perfil.css';
import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';

const DetalleCursoProfesor = (props) => {
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
                setLoading(true);
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
            <Header title={''} />
            <div className="d-flex p-4 border-bottom mb-4">
                <Link to={`/HomeProfesor`} className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
                <div className="w-100 text-center">
                    <p>Código del curso: {curso && (
                        <Tooltip title="Comparte el código del curso con tus alumnos para que estos puedan unirse." arrow>
                            <Chip label={curso[0].codigo} color="primary" />
                        </Tooltip>
                    )}</p>
                </div>
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
                            <i class="fa-solid fa-graduation-cap fa-4 icon-img align-self-center detalle-curso-icon"></i>
                            <div className="text-left">
                                <p className="fw-bolder">Curso</p>
                                <p>{curso[0].anio_cursado}° "{curso[0].division}"</p>
                            </div>
                        </div>
                        <div className="detalle-curso border-bottom pb-4">
                            <i className="fa-solid fa-users icon-img align-self-center detalle-curso-icon"></i>
                            <div className="text-left-pr">
                                <p className="fw-bolder">Cantidad de alumnos</p>
                                <p>{curso[0].estudiantes.length}</p>
                            </div>
                            <Link to={`/CantidadAlumnos/${cursoId}`} className="fa-solid fa-arrow-right align-self-center" style={{ paddingRight: '5%' }}></Link>
                        </div>

                        <div className="detalle-curso border-bottom pb-4">
                            <i className="fa-regular fa-comment-dots icon-img align-self-center detalle-curso-icon"></i>
                            <div className="text-left-pr">
                                <p className="fw-bolder">Opiniones</p>
                                {/* TODO Hardcodeamos esto? Creo que lo hicimos en algún momento pero lo perdí y.y - Ori */}
                                <p>Pendiente</p>
                            </div>
                            <Link to={`/OpinionesProfesor/${cursoId}`} className="fa-solid fa-arrow-right align-self-center" style={{ paddingRight: '5%' }}></Link>
                        </div>

                        <div className="detalle-curso border-bottom pb-4">
                            <i className="fa-regular fa-pen-to-square icon-img align-self-center detalle-curso-icon"></i>
                            <div className="text-left-pr">
                                <p className="fw-bolder">Sugerencias de clase</p>
                                <p>Explore nuevas herramientas de aprendizaje basándose en los intereses de sus alumnos.</p>
                            </div>
                            <Link to={`/SugerenciasProfesor/${cursoId}`} className="fa-solid fa-arrow-right align-self-center" style={{ paddingRight: '5%' }}></Link>
                        </div>

                        <div className="detalle-curso border-bottom pb-4">
                            <i className="fa-regular fa-file-lines icon-img align-self-center detalle-curso-icon"></i>
                            <div className="text-left-pr">
                                <p className="fw-bolder">Formulario para los alumnos</p>
                                <p>Revise las preguntas que sus alumnos deberán contestar para unirse al curso.</p>
                            </div>
                            <Link to={`/FormularioProfesor/${cursoId}`} className="fa-solid fa-arrow-right align-self-center" style={{ paddingRight: '5%' }}></Link>

                        </div>

                    </div>
                )
            )}
            <Footer />
        </div>
    );
};

export default DetalleCursoProfesor;
