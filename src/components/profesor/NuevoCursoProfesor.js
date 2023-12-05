import React, { useEffect, useState } from 'react';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/styles.css';
import '../../styles/perfil.css';
import '../../App.css';
import Alert from '@mui/material/Alert';
import Header from '../Header';
import Footer from '../Footer';
import AuthService from '../../services/AuthService';

const NuevoCursoProfesor = (props) => {
  const navigate = useNavigate();
  const { id: cursoId } = useParams();
  const cursoIdEntero = parseInt(cursoId);
  const profesor = AuthService.getUserData();
  const profesor_id = profesor.id;

  const [colegios, setColegios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    cursoId: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`https://teach-track-backend.onrender.com/colegios`);
        let data = await response.json();
        console.log('RECIBIDO', data);
        setColegios(data);
      } catch (error) {
        console.error('Error en la solicitud:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cursoIdEntero]);

  const [materia, setMateria] = useState('');
  const [colegioSelec, setColegioSelec] = useState('');
  const [curso, setCurso] = useState('');
  const [division, setDivision] = useState('');
  const [preguntasSelecccionadas, setPreguntasSelecccionadas] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState({});
  const [checkedItems, setCheckedItems] = useState([]);

  const handleSubmit = () => {
    setIsSubmitted(true);
    const colegio_id = 3;

    const datosAEnviar = {
      materia,
      profesor_id,
      colegio_id,
      anio_cursado: parseInt(curso),
      division,
      preguntas: checkedItems,
    };

    if (isNaN(selectedCollege)) {
      datosAEnviar.colegio_id = selectedCollege.id;
    }

    const errors = {};
    if (!datosAEnviar.materia || datosAEnviar.materia === undefined) {
      errors.materia = true;
    }
    if (!datosAEnviar.colegio_id || datosAEnviar.colegio_id === undefined) {
      errors.colegio_id = true;
    }
    if (!datosAEnviar.anio_cursado || datosAEnviar.anio_cursado === undefined) {
      errors.anio_cursado = true;
    }
    if (!datosAEnviar.division || datosAEnviar.division === undefined) {
      errors.division = true;
    }
    if (!datosAEnviar.preguntas || datosAEnviar.preguntas === undefined) {
      errors.preguntas = true;
    }

    setValidationErrors(errors);
    if (Object.values(errors).some((error) => error)) {
      console.log('ERRORES:', errors);
    } else {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAEnviar),
      };

      fetch(`https://teach-track-backend.onrender.com/cursos`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log('Respuesta del servidor:', data);
          navigate(`/DetalleCursoProfesor/${data.codigo}`);
        })
        .catch((error) => {
          console.error('Error al enviar la solicitud:', error);
        });
    }

    console.log('Enviando: ', datosAEnviar);
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
  const handleChange = (event) => {
    const selectedCollege = colegios.find((college) => college.id === parseInt(event.target.value));
    setSelectedCollege(selectedCollege);
  };

  const handleChangeCheck = (event) => {
    const item = parseInt(event.target.value);

    if (event.target.checked) {
      setCheckedItems([...checkedItems, item]);
    } else {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    }
  };

  return (
    <div className="body">
      <Header title="Creando nuevo curso" />
        <Alert icon={false} severity="info">Usted está creando un nuevo curso.</Alert>
      <div>
        <div className="d-flex flex-column text-left p-3">
          <label htmlFor="" className="mb-2">
            Materia
          </label>
          {isSubmitted && !materia && <p className="errorText">* Este campo es obligatorio.</p>}
          <TextField
            type="text"
            id="materia"
            value={materia}
            onChange={handleMateriaChange}
            placeholder="Ingrese el nombre de la materia"
          />
        </div>
        <div className="d-flex flex-column text-left p-3">
          <label htmlFor="" className="mb-2">
            Colegio
          </label>
          <FormControl>
            <InputLabel id="colegio-label">Colegio</InputLabel>
            <Select labelId="colegio-label" id="colegio" value={selectedCollege.id} onChange={handleChange}>
              {colegios.map((colegio) => (
                <MenuItem key={colegio.id} value={colegio.id}>
                  {colegio.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="d-flex flex-column text-left p-3">
          <label htmlFor="" className="mb-2">
            Curso
          </label>
          {isSubmitted && !curso && <p className="errorText">* Este campo es obligatorio.</p>}
          <TextField
            type="text"
            id="curso"
            value={curso}
            onChange={handleSetCurso}
            placeholder="Ingrese a qué curso (año o grado) pertenece esta materia."
          />
        </div>
        <div className="d-flex flex-column text-left p-3">
          <label htmlFor="" className="mb-2">
            División
          </label>
          {isSubmitted && !division && <p className="errorText">* Este campo es obligatorio.</p>}
          <TextField
            type="text"
            id="division"
            value={division}
            onChange={handleDivision}
            placeholder="Ingrese la división del curso."
          />
        </div>

        <Alert icon={false} severity="info">Elija las preguntas que quiera que sus alumnos respondan.
        Usaremos sus respuestas para ayudarlo a generar nuevas ideas para la clase.</Alert>
        {isSubmitted && !preguntasSelecccionadas && (
          <p className="errorText mt-2">* Este campo es obligatorio.</p>
        )}
        <div className="mt-2">
        <div className="mt-4">
  <FormGroup style={{ padding: '0 16px' }}>
    <FormControlLabel
      control={<Checkbox value="1" onChange={handleChangeCheck} />}
      label="¿Cuál de los siguientes dirías que es tu principal interés?"
    />
    <FormControlLabel
      control={<Checkbox value="2" onChange={handleChangeCheck} />}
      label="¿Cuál es tu nivel de expectativa de esta materia?"
    />
    <FormControlLabel
      control={<Checkbox value="3" onChange={handleChangeCheck} />}
      label="¿Preferís trabajar individualmente o en grupo?"
    />
    <FormControlLabel
      control={<Checkbox value="4" onChange={handleChangeCheck} />}
      label="¿Te consideras una persona introvertida o extrovertida?"
    />
    <FormControlLabel
      control={<Checkbox value="5" onChange={handleChangeCheck} />}
      label="¿Preferis escribir informes o dar presentaciones?"
    />
    <FormControlLabel
      control={<Checkbox value="6" onChange={handleChangeCheck} />}
      label="¿Qué tan difícil te resultó esta materia en años anteriores?"
    />
  </FormGroup>
</div>

        </div>

        <Button onClick={handleSubmit} variant="contained" className="btn1 p-2 mt-4">
          Crear
        </Button>
      </div>
<p></p>
      <Footer />
    </div>
  );
};

export default NuevoCursoProfesor;
