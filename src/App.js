/* import logo from './logo.svg';
 */import React from 'react';
 import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';


 import '@fortawesome/fontawesome-free/css/all.css'; // Importa FontAwesome CSS
 import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap CSS
 import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa Bootstrap JS
 import './App.css';
 
 /* Alumno */
 import HomeAlumno from './components/alumno/HomeAlumno';
 import DetalleCursoAlumno from './components/alumno/DetalleCursoAlumno';
 import OpinionAlumno from './components/alumno/OpinionAlumno';
 import Favoritos from './components/alumno/Favoritos';
 import NuevoCursoAlumno from './components/alumno/NuevoCursoAlumno';
 import PerfilAlumno from './components/alumno/PerfilAlumno';
 import BuscadorAlumno from './components/alumno/BuscadorAlumno';
 import Formulario from './components/alumno/Formulario';
 
 import LoginAlumno from './components/alumno/LoginAlumno';
 import RegistroAlumno from './components/alumno/RegistroAlumno';
 import LoginProfesor from './components/profesor/LoginProfesor';
 import RegistroProfesor from './components/profesor/RegistroProfesor';
 
 /* Profesor */
 import HomeProfesor from './components/profesor/HomeProfesor';
 import DetalleCursoProfesor from './components/profesor/DetalleCursoProfesor';
 import CantidadAlumnos from './components/profesor/CantidadAlumnos';
 import OpinionesProfesor from './components/profesor/OpinionesProfesor';
 import BuscadorProfesor from './components/profesor/BuscadorProfesor';
 import NuevoCursoProfesor from './components/profesor/NuevoCursoProfesor';
 import PerfilProfesor from './components/profesor/PerfilProfesor';
 import SugerenciasProfesor from './components/profesor/SugerenciasProfesor';
 import FormularioProfesor from './components/profesor/FormularioProfesor';
 
 function App() {
  
   return (
     <Router>
 
         <Routes>
           <Route path="/HomeAlumno"  element={<HomeAlumno />} />
           <Route path="/DetalleCursoAlumno/:id"  element={<DetalleCursoAlumno />} />
           <Route path="/OpinionAlumno/:id"  element={<OpinionAlumno />} />
           <Route path="/Favoritos"  element={<Favoritos />} />
           <Route path="/NuevoCursoAlumno"  element={<NuevoCursoAlumno />} />
           <Route path="/PerfilAlumno"  element={<PerfilAlumno />} />
           <Route path="/BuscadorAlumno"  element={<BuscadorAlumno />} />
           <Route path="/Formulario"  element={<Formulario />} />
 
           <Route path="/LoginAlumno"  element={<LoginAlumno />} />
           <Route path="/RegistroAlumno"  element={<RegistroAlumno />} />
           <Route path="/"  element={<LoginProfesor />} />
           <Route path="/RegistroProfesor"  element={<RegistroProfesor />} />
           
           <Route path="/HomeProfesor"  element={<HomeProfesor />} />
           <Route path="/DetalleCursoProfesor/:id"  element={<DetalleCursoProfesor />} />
           <Route path="/CantidadAlumnos/:id"  element={<CantidadAlumnos />} />
           <Route path="/OpinionesProfesor/:id"  element={<OpinionesProfesor />} />
           <Route path="/BuscadorProfesor"  element={<BuscadorProfesor />} />
           <Route path="/NuevoCursoProfesor"  element={<NuevoCursoProfesor />} />
           <Route path="/PerfilProfesor"  element={<PerfilProfesor />} />
           <Route path="/SugerenciasProfesor"  element={<SugerenciasProfesor />} />
           <Route path="/FormularioProfesor/:id"  element={<FormularioProfesor />} />
 
         </Routes>
 
 
 
     </Router>
   );
 }
 
 export default App;
 