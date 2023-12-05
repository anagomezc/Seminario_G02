import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const CantidadAlumnos = (props) => {

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
            <Link to={`/DetalleCursoProfesor/${cursoId}`}  className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
            
            <div className="w-100 text-center"><p >Listado de alumnos</p></div>
           
        </div>
        {curso && (
            <div>
            
            {curso[0].estudiantes.map((estudiante) => (
                    <div key={estudiante.id} className="detalle-curso border-bottom pb-4">
                    <i className="fa-solid fa-user icon-img align-self-center detalle-curso-icon"></i>
                    <div className="text-left self-center">
                        <p>{`${estudiante.nombre} ${estudiante.apellido}`}</p>
                       
                    </div>
                    </div>
                ))}
        
            </div>
        )}
        <Footer />
      </div>
  
   
  );
}

export default CantidadAlumnos;
