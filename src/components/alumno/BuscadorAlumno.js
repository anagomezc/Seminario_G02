import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles//styles.css'; 
import '../../styles/perfil.css'

import '../../App.css'
import Header from '../Header';
import Footer from '../Footer';

const BuscadorAlumno = () => {
  console.log("AA")
  const a = "AAaAAAAA"
  return (
   
    <div className="body">
        <Header title="Buscadorxxx"/>
      
        <div className="d-flex p-2 border-bottom mb-4">
        <p>A: {a}</p>
            <i className="fa-solid fa-magnifying-glass footer-icon align-self-center p-2"></i>
        </div>
        <Footer />
    </div>

   
  );
}

export default BuscadorAlumno;
