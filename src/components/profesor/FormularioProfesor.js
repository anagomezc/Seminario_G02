import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../../styles/styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const FormularioProfesor  = (props) => {

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
        <Header title="Curso x"/>
        <div className="d-flex p-2 border-bottom mb-4">
            <Link to={`/DetalleCursoProfesor/${cursoId}`}  className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
            
            <div className="w-100 text-center"><p >Elegí las preguntas</p></div>
           
        </div>

        <div>
            <div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm" >¿Cuál de los siguientes dirías que es tu prinicipal interes?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} id="1"/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Cuál es tu nivel de expectativa de esta materia?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} id="2"/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Preferís trabajar individualmente o en grupo?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} id="3"/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Te consideras una persona introvertida o extrovertida?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }}  id="4"/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Preferis escribir informes o dar presentaciones?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} id="5"/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Como fue tu experiencia en cuanto a dificultad con esta materia en años anteriores?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} id="6"/>
                </div>
            
                <button className="btn1 p-2">Guardar</button>
            </div>
       
    
       
        </div>

        <Footer />
    </div>
  
   
  );
}

export default FormularioProfesor;
