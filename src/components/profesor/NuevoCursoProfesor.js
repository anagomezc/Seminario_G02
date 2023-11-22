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

const NuevoCursoProfesor = (props) => {
    const navigate = useNavigate();
    const { id: cursoId } = useParams();  
    const cursoIdEntero = parseInt(cursoId);
    const profesor = AuthService.getUserData();
    const profesor_id = profesor.id

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

    const [materia, setMateria] = useState();
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
            materia,
            profesor_id,
            colegio_id,
            anio_cursado: parseInt(curso),
            division,
            preguntas: checkedItems
        };

        if(isNaN(selectedCollege)){
            datosAEnviar.colegio_id = selectedCollege.id
        } 
       
        const errors = {};
        if (!datosAEnviar.materia || datosAEnviar.materia == undefined) {
            errors.materia = true; 
        }
        if (!datosAEnviar.colegio_id || datosAEnviar.colegio_id == undefined) {
            errors.colegio_id = true;
        }
        if (!datosAEnviar.anio_cursado || datosAEnviar.anio_cursado == undefined) {
            errors.anio_cursado = true;
        }
        if (!datosAEnviar.division || datosAEnviar.division == undefined) {
            errors.division = true;
        }
        if (!datosAEnviar.preguntas || datosAEnviar.preguntas == undefined) {
            errors.preguntas = true;
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

            fetch(`https://teach-track-backend.onrender.com/cursos`, requestOptions)
            .then(response => response.json())
            .then(data => {    
                console.log('Respuesta del servidor:', data);
                navigate(`/DetalleCursoProfesor/${data.codigo}`);
               
            })
            .catch(error => {
                console.error('Error al enviar la solicitud:', error);
            });
        }
       
        console.log("Enviando: ", datosAEnviar)
    };

    const handleMateriaChange = (event) => {
        setMateria(event.target.value);
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
        <Header title="Creando nuevo curso"/>
       
        <div>
            <div className="d-flex flex-column text-left p-3">
                <label htmlFor="" className="mb-2">Materia</label>
                {isSubmitted && !materia && (
                        <p className="errorText">* Este campo es obligatorio</p>
                    )}
                <input type="text" name="" id="materia" value={materia} onChange={handleMateriaChange} placeholder="Ingrese el nombre de la materia" />
            </div>
            <div className="d-flex flex-column text-left p-3">
                <label htmlFor="" className="mb-2">Colegio</label>
                <div>
                    {colegios && (
                        <select className="dropdown" value={selectedCollege.id} onChange={handleChange}>
                            {colegios.map(colegio => (
                            <option key={colegio.id} value={colegio.id}>
                                {colegio.nombre}
                            </option>
                            ))}
                        </select>
                    /*  <p>College selected: {selectedCollege.name}</p> */
                    )}
                </div>
    

            </div>
            <div className="d-flex flex-column text-left p-3">
                <label htmlFor="" className="mb-2">Curso</label>
                {isSubmitted && !curso && (
                    <p className="errorText">* Este campo es obligatorio</p>
                )}
                <input type="text" name="" id="" value={curso} onChange={handleSetCurso} placeholder="Ingrese a que curso (año o grado) pertenece esta materia" />
            </div>
            <div className="d-flex flex-column text-left p-3">
                <label htmlFor="" className="mb-2">Division</label>
                {isSubmitted && !division && (
                    <p className="errorText">* Este campo es obligatorio</p>
                )}
                <input type="text" name="" id="" value={division} onChange={handleDivision} placeholder="Ingrese la cantidad de alumnos del curso" />
            </div>
            {/* <div className="d-flex flex-column text-left p-3">
                <label htmlFor="" className="mb-2">Edad de los alumnos</label>
                {isSubmitted && !preguntasSelecccionadas && (
                    <p className="errorText">* Este campo es obligatorio</p>
                )}
                <input type="text" name="" id="" value={preguntasSelecccionadas} onChange={handlePreguntasSeleccionadas} placeholder="Ingrese el rango de edad (10-11)" />
            </div> */}
            <div className="w-100 text-center"><p >Elegí las preguntas</p></div>
            {isSubmitted && !preguntasSelecccionadas && (
                <p className="errorText">* Este campo es obligatorio</p>
            )}
            <div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm" >¿Cuál de los siguientes dirías que es tu prinicipal interes?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} name="1" value="1" onChange={handleChangeCheck}/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Cuál es tu nivel de expectativa de esta materia?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} name="2" value="2" onChange={handleChangeCheck}/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Preferís trabajar individualmente o en grupo?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} name="3" value="3" onChange={handleChangeCheck}/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Te consideras una persona introvertida o extrovertida?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }}  name="4" value="4" onChange={handleChangeCheck}/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Preferis escribir informes o dar presentaciones?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} name="5" value="5" onChange={handleChangeCheck}/>
                </div>
                <div className="d-flex flex-row text-left p-3">
                    <label htmlFor="" className="labelForm">¿Como fue tu experiencia en cuanto a dificultad con esta materia en años anteriores?</label>
                    <input type="checkbox" className="fs-1 " style={{ width: '10%' }} name="6" value="6" onChange={handleChangeCheck}/>
                </div>
            
             
            </div>
       



            <button onClick={handleSubmit} className="btn1 p-2">Crear</button>
        </div>
         <Footer />

      </div>
  
   
  );
}

export default NuevoCursoProfesor;
