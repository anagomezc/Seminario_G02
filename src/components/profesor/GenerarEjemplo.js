import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, CircularProgress } from '@mui/material';
import Dropdown from '../Dropdown';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import '../../styles//styles.css';
import '../../styles/perfil.css';
import '../../App.css';
import Header from '../Header';
import Footer from '../Footer';
import AuthService from '../../services/AuthService';

const GenerarEjemplo = (props) => {
    const navigate = useNavigate();
    const { id: cursoId } = useParams();
    const cursoIdEntero = parseInt(cursoId);
    const profesor = AuthService.getUserData();
    const profesor_id = profesor.id;
    const [apiResponse, setApiResponse] = useState('');

    const [colegios, setColegios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [validationErrors, setValidationErrors] = useState({
        tema: false,
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

    const [tema, setTema] = useState('');
    const [colegioSelec, setColegioSelec] = useState('');
    const [curso, setCurso] = useState('');
    const [division, setDivision] = useState('');
    const [preguntasSelecccionadas, setPreguntasSelecccionadas] = useState([]);
    const [loadingResponse, setLoadingResponse] = useState(false); // Added state for loading response

    const handleSubmit = () => {
        setIsSubmitted(true);
        setLoadingResponse(true); // Set loading state to true when submitting

        const colegio_id = 3;

        const datosAEnviar = {
            tipo: "ejemplos",
            tema,
        };

        if (isNaN(selectedCollege)) {
            datosAEnviar.colegio_id = selectedCollege.id;
        }

        const errors = {};
        if (!datosAEnviar.tema || datosAEnviar.tema === undefined) {
            errors.tema = true;
        }

        setValidationErrors(errors);
        if (Object.values(errors).some((error) => error)) {
            console.log("ERRORES:", errors);
        } else {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosAEnviar),
            };

            fetch(`https://teach-track-backend.onrender.com/propuestas/cursos/${cursoId}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('Respuesta del servidor:', data);
                    setApiResponse(data.texto);
                })
                .catch(error => {
                    console.error('Error al enviar la solicitud:', error);
                })
                .finally(() => {
                    setLoadingResponse(false); // Set loading state to false when response is received
                });
        }

        console.log("Enviando: ", datosAEnviar);
    };

    const handleTemaChange = (event) => {
        setTema(event.target.value);
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
        setSelectedOption(colegios.find(college => college.id === parseInt(event.target.value)));
        setSelectedCollege(selectedOption);
    };

    const [checkedItems, setCheckedItems] = useState([]);
    const handleChangeCheck = (event) => {
        const item = parseInt(event.target.value);

        if (event.target.checked) {
            setCheckedItems([...checkedItems, item]);
        } else {
            setCheckedItems(checkedItems.filter(i => i !== item));
        }
    };

    return (
        <div className="body">
            <Header title="" />
            <div className="d-flex p-4 border-bottom mb-4">
                <Link to={`/SugerenciasProfesor/${cursoId}`} className="align-self-center"><i className="fa-solid fa-arrow-left"></i></Link>
                <div className="w-100 text-center title"><p>Generar ejemplos</p></div>
            </div>
            <Alert icon={false} severity="info">Ingrese el tema que necesita ejemplificar y generaremos algunas propuestas. </Alert>
            <div>
                <div className="d-flex flex-column text-left p-3">
                    <label htmlFor="tema" className="mb-2">Tema</label>
                    {isSubmitted && !tema && (
                        <p className="errorText">* Este campo es obligatorio</p>
                    )}
                    <TextField
                        id="tema"
                        name="tema"
                        value={tema}
                        onChange={handleTemaChange}
                        placeholder="Por ejemplo, 'usos prácticos de la función lineal en la vida real'..."
                        variant="outlined"
                        fullWidth
                        error={isSubmitted && !tema}
                    />
                </div>

                <Button onClick={handleSubmit} className="btn1" variant="contained" size="large">
                    {loadingResponse ? <CircularProgress size={24} style={{ color: 'white' }} /> : 'Generar'}
                </Button>

                {/* Display API response */}
                {apiResponse && (
                    <div>
                        <h2>Ejemplos:</h2>
                        <p className="apiResponse" style={{ whiteSpace: 'pre-line', paddingLeft: '15px', paddingRight: '15px' }}>{apiResponse}</p>
                        <br></br>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default GenerarEjemplo;
