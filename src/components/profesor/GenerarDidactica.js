import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Dropdown from '../Dropdown'
import { useNavigate } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';
import AuthService from '../../services/AuthService'

const GenerarDidactica
 = (props) => {
    const navigate = useNavigate();
    const { id: cursoId } = useParams();  
    const cursoIdEntero = parseInt(cursoId);
    const profesor = AuthService.getUserData();
    const profesor_id = profesor.id
    const [apiResponse, setApiResponse] = useState('');

    const [colegios, setColegios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [validationErrors, setValidationErrors] = useState({
        cursoId: false
    });

    useEffect(() => {
        const fetchData = async () => {
        
          try {
            let response = await fetch(`https://teach-track-backend.onrender.com/colegios`);
            let data = await response.json();
            console.log("RECIBIDO", data);
            setColegios(data);
           
          } catch (error) {
            console.error('Error en la solicitud:', error);
          } finally {
            setLoading(false);
          }
        };
        
        fetchData();
    }, [cursoIdEntero]);

    const [tema, settema] = useState();
    const [colegioSelec, setColegioSelec] = useState();
    const [curso, setCurso] = useState();
    const [division, setDivision] = useState();
    const [preguntasSelecccionadas, setPreguntasSelecccionadas] = useState([]);
/*     const [edadAlumnos, setEdadAlumnos] = useState();
 */
    const handleSubmit = () => {
       
        setIsSubmitted(true);
        const colegio_id = 3

        const datosAEnviar = {
            tipo: "didacticas",
            tema,
        };

        if(isNaN(selectedCollege)){
            datosAEnviar.colegio_id = selectedCollege.id
        } 
       
        const errors = {};
        if (!datosAEnviar.tema || datosAEnviar.tema == undefined) {
            errors.tema = true; 
        }
       
        setValidationErrors(errors);
        if (Object.values(errors).some((error) => error)) {
            console.log("ERRORES:", errors)
             
        } else {
         
            const requestOptions = {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosAEnviar)
            };

            fetch(`https://teach-track-backend.onrender.com/propuestas/cursos/1`, requestOptions)
            .then(response => response.json())
            .then(data => {    
                console.log('Respuesta del servidor:', data);
                setApiResponse(data.texto); // Assuming that the API response contains a 'texto' property
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
        }
       
        console.log("Enviando: ", datosAEnviar)
    };

    const handletemaChange = (event) => {
        settema(event.target.value);
    };
    const handleColegioSelec = (event) => {
        setColegioSelec(event.target.value);
    };
    const handleSetCurso = (event) => {
        setCurso(event.target.value);
    };
    const handleDivision = (event) => {
        setDivision(event.target.value);
    };
    const handlePreguntasSeleccionadas = (event) => {
        setPreguntasSelecccionadas(event.target.value);
    };
    const [selectedCollege, setSelectedCollege] = useState(1);
    const [selectedOption, setSelectedOption] = useState(1);
    const handleChange = (event) => {
        setSelectedOption(colegios.find(college => college.id === parseInt(event.target.value)))
        setSelectedCollege(selectedOption);
    };


    const [checkedItems, setCheckedItems] = useState([]);
    const handleChangeCheck = (event) => {
        const item = parseInt(event.target.value)

        if (event.target.checked) {
            setCheckedItems([...checkedItems, item]);
        } else {
            setCheckedItems(checkedItems.filter(i => i !== item));
        }
    };
  return (
      <div className="body">
        <Header title="Generar didáctica de clase"/>
       
        <div>
            <div className="d-flex flex-column text-left p-3">
                <label htmlFor="" className="mb-2">Tema</label>
                {isSubmitted && !tema && (
                        <p className="errorText">* Este campo es obligatorio</p>
                    )}
                <input type="text" name="" id="tema" value={tema} onChange={handletemaChange} placeholder="Ingrese el tema que necesita ejemplificar..." />
            </div>

            <button onClick={handleSubmit} className="btn1 p-2">Generar</button>

                        {/* Display API response */}
                        {apiResponse && (
                <div>
                    <h2>Ejemplos:</h2>
                    <p className="apiResponse" style={{ whiteSpace: 'pre-line' }}>{apiResponse}</p>
                </div>
            )}
        </div>
         <Footer />

      </div>
  
   
  );
}

export default GenerarDidactica
;
