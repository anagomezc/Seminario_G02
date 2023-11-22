import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const Formulario = () => {
    const handleSubmit = () => {
       
        /* setIsSubmitted(true);
        const datosAEnviar = {
            estudiante_id: userId,
            clasificacion,
            texto
        };
       
        const errors = {};
        if (!datosAEnviar.clasificacion || datosAEnviar.clasificacion == undefined) {
            errors.clasificacion = true;
           
        }
        if (!datosAEnviar.texto || datosAEnviar.texto == undefined) {
            errors.texto = true;
        }
       
        setValidationErrors(errors);
        if (Object.values(errors).some((error) => error)) {
            console.log(errors)
             
        } else {
         
            const requestOptions = {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosAEnviar)
            };

            fetch(`https://teach-track-backend.onrender.com/feedback/cursos/${cursoId}`, requestOptions)
            .then(response => response.json())
            .then(data => {    
                console.log('Respuesta del servidor:', data);
            
                handleModalShow()
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
        } */
       
       /*  console.log("Enviando: ", datosAEnviar) */
    };
    
  return (
    <div className="body">
        <div className="blue-header">
            <h3>Formulario</h3>
        </div>
        <div>
            <div className="d-flex justify-content-between p-2 border-bottom mb-4">
                <p>Mis cursos</p>
                <button className="btn3-grey">Ver todos</button>
            </div>
        </div>
        <div>
            <h1>¿Cuales son tus hobbies o intereses?</h1>
            <div className="p-4">
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Deportes
                </button>
                <button type="button" id="1" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Música
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Arte
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Idiomas
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Historia
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Geografía
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Informática
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Finanzas
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Turismo
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Biología
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Química
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Medicina
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Aventuras
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Paleontología
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Cine
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Animales
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Deportes
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Música
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Arte
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Idiomas
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Historia
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Geografía
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Informática
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Finanzas
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Turismo
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Biología
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Química
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Medicina
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Aventuras
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Paleontología
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Cine
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Animales
                </button>
            </div>
          
        </div>
        <div>
        <h1>¿Cuál es tu nivel de expectativa de esta materia?</h1>
            <div className="p-4">
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Baja, es de las materias que menos interes me generan
                </button>
                <button type="button" id="1" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Neutral, no me desmotiva ni me interesa
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Altas, es de las materias que mas me interesa aprender
                </button>
                <button type="button" className="btn btn-primary btnForm" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Muy altas, es la materia que MÁS ganas de estudiar tengo
                </button>
                
            </div>
            <button  onClick={handleSubmit} type="button" className="btn btn1">Enviar</button>
       
        </div>
        <Footer />
    </div>
   
  );
}

export default Formulario;
