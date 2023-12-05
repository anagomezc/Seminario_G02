import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../styles/styles.css';
import '../styles/perfil.css';

import '../styles/footer.css';

import AuthService from '../services/AuthService';

const Footer = () => {
  const [homeLink, setHomeLink] = useState('');
  const [buscadorLink, setBuscadorLink] = useState('');
  const [nuevoCursoLink, setNuevoCursoLink] = useState('');
  const [favoritosLink, setFavoritosLink] = useState('');
  const [perfilLink, setPerfilLink] = useState('');
  const userType = AuthService.getUserType();

  useEffect(() => {
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
  }, [userType]);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    AuthService.logout();
    if (userType === 'alumno') {
      navigate('/LoginAlumno');
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="footer">
      <Link to={homeLink} className="footer-link" title="Home">
        <i className="fa-solid fa-house footer-icon"></i>
      </Link>
      <Link to={buscadorLink} className="footer-link" title="Buscador">
        <i className="fa-solid fa-magnifying-glass footer-icon"></i>
      </Link>
      <Link to={nuevoCursoLink} className="footer-link" title="Nuevo Curso">
        <i className="fa-solid fa-plus footer-icon"></i>
      </Link>
      <Link onClick={handleModalShow} className="footer-link" title="Cerrar Sesión">
        <i className="fa-solid fa-right-from-bracket footer-icon"></i>
      </Link>
      <Modal show={showModal} onHide={handleModalClose} className="modalFooter">
        <Modal.Header closeButton>
          <Modal.Title>Cerrando sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro que desea cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLogout}>
            Cerrar sesión
          </Button>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
