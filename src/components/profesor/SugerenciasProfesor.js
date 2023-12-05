import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


import '../../styles//styles.css'; 
import '../../styles/perfil.css'
import Alert from '@mui/material/Alert';
import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const SugerenciasProfesor = (props) => {

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
        <Header title=""/>
        <div className="d-flex p-4 border-bottom mb-4">
            <Link to={`/DetalleCursoProfesor/${cursoId}`}  className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
            
            <div className="w-100 text-center title"><p >Sugerencias para el profesor</p></div>
        </div>
        <div className="detalle-curso border-bottom pb-4">
                <i className="fa-solid fa-wand-magic-sparkles icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left-pr">
                    <p className="fw-bolder">Ejemplos</p>
                    <p>Generemos un ejemplo conceptual para reforzar los conocimientos de la clase.</p>
                </div>
                <Link  to={`/GenerarEjemplo/${cursoIdEntero}`} className="fa-solid fa-arrow-right align-self-center" style={{ paddingRight: '5%' }}></Link>

        </div>
        <div className="detalle-curso border-bottom pb-4">
                <i className="fa-solid fa-wand-magic-sparkles icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left-pr">
                    <p className="fw-bolder">Didácticas</p>
                    <p>Pensemos en una actividad para realizar en clase basándonos en los gustos de tus alumnos.</p>
                </div>
                <Link  to={`/GenerarDidactica/${cursoIdEntero}`} className="fa-solid fa-arrow-right align-self-center" style={{ paddingRight: '5%' }}></Link>

        </div>
        <div className="detalle-curso border-bottom pb-4">
                <i className="fa-solid fa-wand-magic-sparkles icon-img align-self-center detalle-curso-icon"></i>
                <div className="text-left-pr">
                    <p className="fw-bolder">Herramientas</p>
                    <p>Busquemos nuevas herramientas para implementar en tus clases.</p>
                </div>
                <Link  to={`/GenerarHerramienta/${cursoIdEntero}`} className="fa-solid fa-arrow-right align-self-center" style={{ paddingRight: '5%' }}></Link>

        </div>


        <Footer />
      </div>
  
   
  );
}

export default SugerenciasProfesor;
