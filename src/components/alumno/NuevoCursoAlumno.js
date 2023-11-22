import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'
import AuthService from '../../services/AuthService'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const NuevoCursoAlumno = () => {
    const navigate = useNavigate();

    const user = AuthService.getUserData();
    const userId = user.id

    const [cursoId, setCursoId] = useState()
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [validationErrors, setValidationErrors] = useState({
        cursoId: false
    });
    const handleCodigoChange = (event) => {
        setCursoId(event.target.value);
    };
    /* const handleSubmit = () => {
       
        setIsSubmitted(true);
        const datosAEnviar = {
            estudiante_id: userId,
            curso_codigo: parseInt(cursoId)
        };
       
        const errors = {};
        if (!datosAEnviar.estudiante_id || datosAEnviar.estudiante_id == undefined) {
            errors.estudiante_id = true;
           
        }
        if (!datosAEnviar.curso_codigo || datosAEnviar.curso_codigo == undefined) {
            errors.curso_codigo = true;
        }
       
       
         
        const requestOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosAEnviar)
        };

        try {
            let response = await fetch(`https://teach-track-backend.onrender.com/cursos/estudiantes/${userId}`);
            let data = await response.json();
            console.log("RECIBIDO", data);
            setPreguntas(data)
            } catch (error) {
            console.error('Error en la solicitud:', error);
            }

            fetch(`https://teach-track-backend.onrender.com/estudiantes/${userId}/cursos/${cursoId}`, requestOptions)
            .then(response => response.json())
            .then(data => {    
                console.log('Respuesta del servidor:', data);
            
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
        
       
        console.log("Enviando: ", datosAEnviar)
    }; */

    const handleNuevoCurso = async () => {

        const preguntasSinResponder = preguntas.filter(
            (pregunta) => !respuestas[pregunta.id]
        );
    
        if (preguntasSinResponder.length > 0) {
            alert('Por favor, responde todas las preguntas antes de unirte.');
            return;
        }

          
          
        const user = AuthService.getUserData();
        const userId = user.id;
        const datosAEnviar = {
            respuestas: Object.entries(respuestas).map(([preguntaId, opcionId]) => ({
              pregunta_id: parseInt(preguntaId),
              opcion_id: parseInt(opcionId),
            })),
          }

        const requestOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosAEnviar)
        };

       

        fetch(`https://teach-track-backend.onrender.com/estudiantes/${userId}/cursos/${cursoId}`, requestOptions)
        .then(response => response.json())
        .then(data => {    
            console.log('Respuesta del servidor:', data);
            navigate(`/DetalleCursoAlumno/${cursoId}`);
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
        });
        
       
        console.log("Enviando: ", datosAEnviar)
    };

    const handleSubmit = async () => {
        const user = AuthService.getUserData();
        const userId = user.id;
        console.log(cursoId);
        try {
          let response = await fetch(`https://teach-track-backend.onrender.com/cursos/${cursoId}`);
          let data = await response.json();
          console.log("RECIBIDO", data[0].preguntas);
          setPreguntas(data[0].preguntas);
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
    };

    const [preguntas, setPreguntas] = useState();

    const [respuestas, setRespuestas] = useState({});

    const handleOptionChange = (preguntaId, opcionId) => {
        setRespuestas((prevRespuestas) => ({
          ...prevRespuestas,
          [preguntaId]: opcionId,
        }));
    };

    useEffect(() => {
        (async () => {
            const user = AuthService.getUserData();
            const userId = user.id

          
        })();
    }, []);

  return (
      <div className="body">
        <Header title="Nuevo curso"/>
        <div>
            <div className="d-flex p-2 border-bottom mb-4">
           
                <div className="w-100 text-center"><p >Agregando nuevo curso</p></div>
           
            </div>
        </div>

        <div className="errorPadding">
            
            <h1>Código del curso</h1>

            <div className="p-4">
            {isSubmitted && !cursoId && (
              <p className="errorText">* Ingrese el código</p>
            )}
                <input type="text" className="form-control" value={cursoId}
                        onChange={handleCodigoChange} placeholder="Código" aria-label="Username" aria-describedby="basic-addon1" />
              
            </div>
            <div><button  onClick={handleSubmit} type="button" className="btn btn1">Buscar curso</button></div>

            <div className="preguntasCurso">
                {preguntas && preguntas.map((pregunta, index) => (
                    <div key={index} className="preguntaCurso">
                        <h3>{pregunta.texto}</h3>
                        {pregunta.opciones && pregunta.opciones.map((opcion, opcIndex) => (
                            <div className="opcionPregunta">
                                <input
                                    type="radio"
                                    id={opcion.id}
                                    name={`pregunta-${pregunta.id}`}
                                    value={opcion.id}
                                    checked={respuestas[pregunta.id] === opcion.id}
                                    onChange={() => handleOptionChange(pregunta.id, opcion.id)}
                                    />
                                <label htmlFor={opcion.id}>{opcion.texto}</label>
                            </div>
                        ))}
                        
                    </div>
                ))}
            </div>
            {preguntas && (
                <div><button  onClick={handleNuevoCurso} type="button" className="btn btn1">Unirme</button></div>

            )}





              
           
        </div>

        <Footer />
      </div>
  
   
  );
}

export default NuevoCursoAlumno;
