import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


import '../styles//styles.css'; 
import '../styles/perfil.css'

import '../styles/footer.css'

import AuthService from '../services/AuthService'


const Footer = () => {
    const [homeLink, setHomeLink] = useState(''); 
    const [buscadorLink, setBuscadorLink] = useState(''); 
    const [nuevoCursoLink, setNuevoCursoLink] = useState(''); 
    const [favoritosLink, setFavoritosLink] = useState(''); 
    const [perfilLink, setPerfilLink] = useState(''); 

    useEffect(() => {
        const userType = AuthService.getUserType();
        const getHomeLink = () => (userType === 'profesor' ? '/HomeProfesor' : '/HomeAlumno');
        setHomeLink(getHomeLink());

        const getBuscadorLink = () => (userType === 'profesor' ? '/BuscadorProfesor' : '/BuscadorAlumno');
        setBuscadorLink(getBuscadorLink());

        const getNuevoCursoLink = () => (userType === 'profesor' ? '/NuevoCursoProfesor' : '/NuevoCursoAlumno');
        setNuevoCursoLink(getNuevoCursoLink());

        const getFavoritosLink = () => (userType === 'profesor' ? '/Favoritos' : '/Favoritos');
        setFavoritosLink(getFavoritosLink());

        const getPerfilLink = () => (userType === 'profesor' ? '/PerfilProfesor' : '/PerfilAlumno');
        setPerfilLink(getPerfilLink());

      }, []); 

  return (
   
     <footer className="footer">
        <Link to={homeLink}>
            <i className="fa-solid fa-house footer-icon"></i>
        </Link>
        <Link to={buscadorLink}>
            <i className="fa-solid fa-magnifying-glass footer-icon"></i>
        </Link>
        <Link to={nuevoCursoLink}>
            <i className="fa-solid fa-plus footer-icon"></i>
        </Link>
        <Link to={favoritosLink}>
            <i className="fa-regular fa-star footer-icon"></i>
        </Link>
        <Link to={perfilLink}>
            <i className="fa-regular fa-user footer-icon"></i>
        </Link>
    </footer>
   
  );
}

export default Footer;
