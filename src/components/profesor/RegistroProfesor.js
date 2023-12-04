import React from 'react';
import { Link } from 'react-router-dom';
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
  CssBaseline,
  InputAdornment,
  IconButton,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import welcomeImage from '../../assets/teacher.png'; // Replace with the actual path to your image file
import logo from '../../assets/logo.png'; // Replace with the actual path to your image file

const RegisterProfesor = () => {
  return (
    <Container
      component="main"
      style={{
        height: '100vh',
        backgroundColor: '#355389',
        backgroundImage: `url(../../assets/background.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%' }}
      >
        <Paper
          elevation={3}
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: '30%',
              marginBottom: 20,
              animation: 'float 3s ease-in-out infinite',
            }}
          />
          <Typography component="h1" variant="h4" style={{ marginBottom: 20 }}>
            ¡Bienvenido!
          </Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3} md={6}>
              <img
                src={welcomeImage}
                alt="Welcome"
                style={{
                  width: '100%',
                  marginBottom: 20,
                  animation: 'float 3s ease-in-out infinite',
                }}
              />
            </Grid>
            <Grid item xs={8} md={2}>
              <Typography style={{ marginBottom: 10 }}>
                Usted se está registrando como{' '}
                <span style={{ color: '#355389' }}>
                  <b>profesor</b>
                </span>
                .
              </Typography>
            </Grid>
          </Grid>
          <form style={{ width: '100%', marginTop: 10 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Nombre completo"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Usuario"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <AccountCircleIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Contraseña"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <LockIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
            >
              Registrarme
            </Button>
          </form>

          <div style={{ width: '100%', marginTop: 20 }}>
            <Button
              component={Link}
              to="/LoginProfesor"
              fullWidth
              variant="outlined"
              color="primary"
              style={{ marginBottom: 10 }}
            >
              Ya tengo una cuenta
            </Button>
            <Button
              component={Link}
              to="/LoginAlumno"
              fullWidth
              variant="outlined"
              color="primary"
            >
              Ingresar como alumno
            </Button>
          </div>
        </Paper>
      </Grid>
    </Container>
  );
};

export default RegisterProfesor;
