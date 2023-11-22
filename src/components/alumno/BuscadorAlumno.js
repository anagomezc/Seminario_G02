import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const BuscadorAlumno = () => {

  const [busqueda, setBusqueda] = useState('');
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmited(true)
    
    console.log("Buscando:", busqueda)
    if(busqueda != '') {
      const requestOptions = {
          method: 'GET', 
          headers: {
              'Content-Type': 'application/json',
          },
          /* body: JSON.stringify(datosAEnviar) */
      };

      fetch(`https://teach-track-backend.onrender.com/colegios/search/${busqueda}`, requestOptions)
      .then(response => response.json())
      .then(data => {    
          console.log('Respuesta del servidor:', data);
          setResultadosBusqueda(data)
      })
      .catch(error => {
          console.error('Error al enviar la solicitud:', error);
      });
    }
      
    
   
  };
  return (
   
    <div className="body">
        <Header title="Buscador"/>
        <form onSubmit={handleSubmit}>
          <div className="d-flex p-2 border-bottom mb-4">
            <i className="fa-solid fa-magnifying-glass footer-icon align-self-center p-2"></i>
            <input
                type="text"
                className="form-control text-center w-100"
                placeholder="Buscar por colegio"
                value={busqueda}
                onChange={handleBusqueda}
              />
              <button type="submit" className="btn3">
                Buscar
              </button>
          </div>
          
        </form>
        <div className="resultados">
          {resultadosBusqueda.map((curso) => (
            <Link  to={`/DetalleCursoProfesor/${curso.id}`} key={curso.id} className="materia-container border-bottom pb-4">
                {/* Puedes personalizar la información mostrada en cada curso según tus necesidades */}
                <i className="fa-solid fa-book icon-img align-self-center"></i>
                <div className="text-left">
                    <p className="fw-bolder">{curso.nombre}</p>     
                </div>
                <div className="align-self-center"><i className="fa-solid fa-arrow-right align-self-center"></i></div>
            </Link>

            ))}
          {isSubmited && resultadosBusqueda.length === 0 && (
            <p>No se encontraron resultados</p>
          )}
        </div>
        <Footer />
    </div>

   
  );
}

export default BuscadorAlumno;
