import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const OpinionesProfesor = (props) => {

    const { id: cursoId } = useParams();  
    const cursoIdEntero = parseInt(cursoId);
  
    const [opiniones, setOpiniones] = useState();
    const [opinionesTotales, setOpinionesTotales] = useState();
    const [opinionesOportunidad, setOpinionesOportunidad] = useState([]);
    const [opinionesFeedback, setOpinionesFeedback] = useState([]);

    const [loading, setLoading] = useState(true);
    const [opinionesCateg, setOpinionesCateg] = useState();

    useEffect(() => {
        const fetchData = async () => {
          if (isNaN(cursoIdEntero)) {
            console.error('Error: cursoId no es un número válido.');
            setLoading(false);
            return;
          }
    
          try {
            let response = await fetch(`https://teach-track-backend.onrender.com/feedback/cursos/${cursoIdEntero}`);
            let data = await response.json();
            console.log("RECIBIDO", data);
            setOpinionesTotales(data)
            setOpiniones(data);
            /* if (opiniones && opiniones.length > 0) {
                const oportunidad = opiniones.filter(opinion => opinion.clasificacion === "Oportunidad de mejora");
                const feedback = opiniones.filter(opinion => opinion.clasificacion === "Feedback positivo");
          
                setOpinionesOportunidad(oportunidad);
                setOpinionesFeedback(feedback);
            }
           */

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
        <Header title="Curso x"/>
        <div className="d-flex p-2 border-bottom mb-4">
            <Link to={`/DetalleCursoProfesor/${cursoId}`}  className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
            
            <div className="w-100 text-center title"><p >Opiniones de los alumnos</p></div>
           
        </div>

        <div>
        <div className="d-flex border-bottom mb-4">
            <div className="w-100 text-center">
                <p className="h4">PUNTOS DE MEJORA</p>
            </div>  
        </div>
        {opinionesTotales && opinionesTotales.length > 0 && (
          <div>
            {opinionesTotales.map((opinion) => (
              opinion.clasificacion === "Oportunidad de mejora" && (
                <div key={opinion.id} className="detalle-curso border-bottom pb-4">
                  <i className="fa-solid fa-user icon-img align-self-center detalle-curso-icon"></i>
                  <div className="text-left">
                    <p>{`${opinion.estudiante.nombre} ${opinion.estudiante.apellido}`}</p>
                    <p>{opinion.texto}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        
    </div>
    <div>
        <div className="d-flex border-bottom mb-4">
            <div className="w-100 text-center">
                <p className="h4">FORTALEZAS</p>
            </div>  
        </div>
        {opinionesTotales && opinionesTotales.length > 0 && (
          <div>
            {opinionesTotales.map((opinion) => (
              opinion.clasificacion === "Feedback positivo" && (
                <div key={opinion.id} className="detalle-curso border-bottom pb-4">
                  <i className="fa-solid fa-user icon-img align-self-center detalle-curso-icon"></i>
                  <div className="text-left">
                    <p>{`${opinion.estudiante.nombre} ${opinion.estudiante.apellido}`}</p>
                    <p>{opinion.texto}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
        
    </div>

        <Footer />
      </div>
  
   
  );
}

export default OpinionesProfesor;
