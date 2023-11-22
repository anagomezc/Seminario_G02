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
    const handleSubmit = () => {
       
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
            
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
        }
       
        console.log("Enviando: ", datosAEnviar)
    };

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
            <div><button  onClick={handleSubmit} type="button" className="btn btn1">Enviar</button></div>
        </div>

        <Footer />
      </div>
  
   
  );
}

export default NuevoCursoAlumno;
