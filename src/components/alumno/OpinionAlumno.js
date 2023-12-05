import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
/* import {  Button } from 'react-bootstrap'; 
 */import { useNavigate } from 'react-router-dom';
 import Alert from '@mui/material/Alert';
import '../../styles//styles.css'; 
import '../../styles/perfil.css'
import AuthService from '../../services/AuthService'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

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

    const [modalCreado, setModalCreado] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        navigate(`/DetalleCursoAlumno/${cursoId}`);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #282c34',
        borderRadius: 5,
        boxShadow: 24,
        p: 4,
        width: '90%',
        textAlign: 'center',
      };

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
                handleOpen()
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
            <div className="d-flex p-4 border-bottom mb-4">
            <Link to={`/DetalleCursoAlumno/${cursoId}`} href="homeAlumno.html" className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
                <div className="w-100 text-center"><p >Opinión de la Materia</p></div>
            
            </div>
        </div>
        <div>
        <Alert icon={false} severity="info">En este espacio podrá dejar comentarios respecto a la clase o el profesor. Le recomendamos ser conciso y mantener el respeto.</Alert>
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
                        Agradecimiento
                    </label>
                </div>
                <br />
                {isSubmitted && !texto && (
                        <p className="errorText">* Este campo es obligatorio</p>
                    )}
                <textarea className="form-control" placeholder="Ingrese sus comentarios..." onChange={handleTextoChange}></textarea>
                <br />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label className="form-check-label" for="flexCheckChecked">
                    Quiero enviarlo de forma anónima
                    </label>
                </div>
            </div>
        </div>
        
        <div><button onClick={handleSubmit} type="button" className="btn btn1">Enviar</button></div>
        
           {/*  <Modal show={showModal} onHide={handleModalClose}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                    Agradecimiento
                </Typography>
                <Modal.Body>
                    Gracias por dar tu opinión.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
 */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    Listo!
                </Typography>
                <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2 }}>
                    Gracias por dejar tu opinión.
                </Typography>
                    <Button variant="text" size="large" sx={{ mt: 2 }} onClick={handleClose}>Cerrar</Button>
                </Box>
            

            </Modal>
        <Footer />
      </div>
  
   
  );
}

export default OpinionAlumno;
