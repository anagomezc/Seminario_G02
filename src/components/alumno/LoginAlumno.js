import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    TextField,
    Button,
    Container,
    Typography,
    Paper,
    Grid,
    CssBaseline,
} from '@mui/material';
import AuthService from '../../services/AuthService';
import { InputAdornment, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import welcomeImage from '../../assets/estudiante.png'; // Replace with the actual path to your image file
import logo from '../../assets/Azul.png'; // Replace with the actual path to your image file
import { blue } from '@mui/material/colors';

const LoginAlumno = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        const userType = 'alumno';
        const isSuccess = AuthService.login(username, password);

        if (isSuccess) {
            navigate('/HomeAlumno');
        } else {
            setError('Credenciales incorrectas. Por favor, intenta de nuevo.');
        }
    };

    return (
        <Container
            component="main"
            style={{
                height: '100vh',
                backgroundColor: '#355389',
                backgroundImage: `url(../../assets/background.png)`,
                backgroundSize: 'cover', // Adjust as needed
                backgroundRepeat: 'no-repeat', // Adjust as needed
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
                    elevation={4}
                    style={{
                        padding: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white', // Set your desired background color here
                    }}
                >                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: '30%',
                            marginBottom: 20,
                            animation: 'float 3s ease-in-out infinite',
                        }}
                    />
                    <Typography component="h1" variant="h4" style={{ marginBottom: 20 }}>
                        Class-E
                    </Typography>
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
                                Usted está ingresando como <span style={{ color: '#355389' }}><b>alumno</b></span>.
                            </Typography>

                        </Grid>
                    </Grid>


                    {error && (
                        <Typography
                            component="p"
                            variant="body2"
                            color="error"
                            style={{ margin: '10px 0' }}
                        >
                            {error}
                        </Typography>
                    )}

                    <form style={{ width: '100%', marginTop: 10 }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Usuario"
                            name="username"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            onClick={handleLogin}
                            style={{ marginTop: 20 }}
                        >
                            Ingresar
                        </Button>
                    </form>

                    <div style={{ width: '100%', marginTop: 20 }}>
                        <Button
                            component={Link}
                            to="/RegistroAlumno"
                            fullWidth
                            variant="outlined"
                            color="primary"
                            style={{ marginBottom: 10 }}
                        >
                            Registrarme
                        </Button>
                        <Button
                            component={Link}
                            to="/"
                            fullWidth
                            variant="outlined"
                            color="primary"
                        >
                            Ingresar como profesor
                        </Button>
                    </div>
                </Paper>
            </Grid>
        </Container>
    );
};

export default LoginAlumno;
