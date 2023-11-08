import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useNavigate();
    const location = useLocation();

    const {user,  RegisterNewUser, isLoading} = useAuth();
    const handleOnBlur = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
     }
    const handleSubmit = e => {
        // setIsLoading(false);
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
            return;
        }
        RegisterNewUser(loginData.name, loginData.email, loginData.password, history);
       
    }
    return (
        <div>
            <Container>
        <Grid container spacing={2}>
        <Grid sx={{mt: 8}} item xs={12} md={6}>
        <Typography variant="body1">Register</Typography>
       {!isLoading? <form onSubmit={handleSubmit}>
        <TextField 
        sx={{width: '75%', m: 1}}
        id="standard-basic" 
        label=" Your Name"
        name="name"
        onBlur={handleOnBlur} 
        variant="standard" />
        <TextField 
        sx={{width: '75%', m: 1}}
        id="standard-basic" 
        label=" Your Email"
        name="email"
        onBlur={handleOnBlur} 
        variant="standard" />
        <TextField
         sx={{width: '75%', m: 1}}
         id="standard-basic" 
         label="Password"
         name="password"
         onBlur={handleOnBlur} 
         type="password"
         variant="standard" />
        <TextField
         sx={{width: '75%', m: 1}}
         id="standard-basic" 
         label="Re-type Password"
         name="password2"
         onBlur={handleOnBlur} 
         type="password"
         variant="standard" />
         <br />
          <Button  sx={{width: '75%', m: 1}} variant="contained" type="submit">Register</Button>
        </form> : <CircularProgress />}
         {user.email && <Alert severity="success">This is a success register!</Alert>}
        <NavLink
        style={{textDecoration: 'none'}}
        to="/login">Already Registered? Please Login</NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
        <img style={{width: '100%', height: '550px'}} src="https://media.istockphoto.com/id/497347644/photo/hand-pressing-register-now.webp?b=1&s=170667a&w=0&k=20&c=ZV58v5dckr5lEbp-D2ke7PxpkMiR-G6x_MvgBTm-2Hs=" alt="" />
        </Grid>
        </Grid>
    </Container>
        </div>
    );
};

export default Register;