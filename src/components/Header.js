import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import logo from '../assets/logo.png'; // Replace with the actual path to your logo image
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthService from '../services/AuthService';

const Header = (props) => {
  const [perfilLink, setPerfilLink] = useState('');
  const [homeLink, setHomeLink] = useState('');

  useEffect(() => {
    const userType = AuthService.getUserType();
    console.log(userType);

    const getPerfilLink = () => (userType === 'profesor' ? '/PerfilProfesor' : '/PerfilAlumno');
    setPerfilLink(getPerfilLink());

    const getHomeLink = () => (userType === 'profesor' ? '/HomeProfesor' : '/HomeAlumno');
    setHomeLink(getHomeLink());

  }, []);

  return (
    <div className="blue-header">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to={homeLink}>
            <img
              src={logo}
              alt="App Logo"
              className="app-logo"
              style={{ width: '40px', height: 'auto', marginRight: '10px', borderRadius: '20%', transition: 'transform 1s ease-in-out' }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
          </Link>
          <Link to={homeLink} className="logo-link">
            <Typography
              variant="h1"
              style={{
                margin: '0',
                verticalAlign: 'middle',
                color: '#fff',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 'bold',
                fontSize: '1.5rem', // Adjust the font size as needed
                cursor: 'pointer',
                transition: 'color 1s ease-in-out',
              }}
              onMouseOver={(e) => e.target.style.color = '#2196F3'}
              onMouseOut={(e) => e.target.style.color = '#fff'}
            >
              CheProfe!
            </Typography>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ margin: '0', verticalAlign: 'middle', marginRight: '10px' }}>{props.title}</h3>
          <Link to={perfilLink}>
            <AccountCircleIcon style={{ fontSize: '2rem', color: '#fff', cursor: 'pointer', transition: 'color 1s ease-in-out' }}
              onMouseOver={(e) => e.target.style.color = '#2196F3'}
              onMouseOut={(e) => e.target.style.color = '#fff'}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
