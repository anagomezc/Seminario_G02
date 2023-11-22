import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'
import AuthService from '../../services/AuthService'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const OpinionAlumno = (props) => {
    const navigate = useNavigate();

    const user = AuthService.getUserData();
    const userId = user.id

    const { id: cursoId } = useParams();  
    const cursoIdEntero = parseInt(cursoId);

    const [loading, setLoading] = useState(true);
    const [clasificacion, setClasificacion] = useState()
    const [texto, setTexto] = useState()
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
        navigate('/HomeAlumno');

    };

    const handleModalShow = () => {
        setShowModal(true);
    };

    const [validationErrors, setValidationErrors] = useState({
        clasificacion: false,
        texto: false
    });
    const handleClasificacionChange = (event) => {
        setClasificacion(event.target.value);
    };

    const handleTextoChange = (event) => {
        setTexto(event.target.value);
    };

    const handleSubmit = () => {
       
        setIsSubmitted(true);
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
        }
       
        console.log("Enviando: ", datosAEnviar)
    };

  return (
      <div className="body">
        <Header title="Mis cursos"/>
        <div>
            <div className="d-flex p-2 border-bottom mb-4">
            <Link to={`/DetalleCursoAlumno/${cursoId}`} href="homeAlumno.html" className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
                <div className="w-100 text-center"><p >Opinión de la Materia</p></div>
            
            </div>
        </div>
        <div>
            <h1>Deja acá tu comentario sobre las clases</h1>
            <div className="p-4">
                <div className="options">
                    {isSubmitted && !clasificacion && (
                        <p className="errorText">* Este campo es obligatorio</p>
                    )}
                    <label className="option">
                        <input type="radio" name="choice" value="Oportunidad de mejora" onChange={handleClasificacionChange} />
                        <span className="radio-custom"></span>
                        Oportunidad de Mejora
                    </label>
                    <label className="option">
                        <input type="radio" name="choice" value="Feedback positivo" onChange={handleClasificacionChange} />
                        <span className="radio-custom"></span>
                        Feedback positivo
                    </label>
                </div>
                <br />
                {isSubmitted && !texto && (
                        <p className="errorText">* Este campo es obligatorio</p>
                    )}
                <textarea className="form-control" placeholder="Ingrese su opinión constructiva..." onChange={handleTextoChange}></textarea>
                <br />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label className="form-check-label" for="flexCheckChecked">
                    Quiero enviarlo de forma anónima
                    </label>
                </div>
            </div>
        </div>
        
        <div><button onClick={handleSubmit} type="button" className="btn btn1">Enviar</button></div>
        
            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agradecimiento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Gracias por dar tu opinión.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        <Footer />
      </div>
  
   
  );
}

export default OpinionAlumno;
