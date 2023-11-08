import React, { useState } from 'react';
import useAuth from '../Context/useAuth';
import { useNavigate, useLocation, NavLink} from 'react-router-dom';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';

const Login = () => {
    const location = useLocation()
    const history = useNavigate();
    const redirect_url = location.state?.from || '/home';
    const {SignInWithGoogle, setIsLogin, LoginUser, user, isLogin} = useAuth();
    // if(isLogin) {
    //     return 0;
    // }
    const [loginData, setLoginData] = useState({});
    // const {user,  LoginUser, isLoading, error} = useAuth();
    // const location = useLocation();
    // const history = useNavigate();
     const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
     }
    const handleSubmit = e => {

        LoginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleSignInGoogle = () =>{
        SignInWithGoogle()
        .then(res =>{
            
            history(redirect_url);
            // isLogin(false);
        })
        .finally(() =>setIsLogin(false));
        
    }
    return (
        <div>
            <Container>
            <Grid container spacing={2}>
            <Grid sx={{mt: 8}} item xs={12} md={6}>
            <Typography variant="body1">Login</Typography>
            {!isLogin && <form onSubmit={handleSubmit}>
            <TextField 
            sx={{width: '75%', m: 1}}
            id="standard-basic" 
            label=" Your Email"
            name="email"
            onChange={handleOnChange} 
            variant="standard" />
            <TextField
             sx={{width: '75%', m: 1}}
             id="standard-basic" 
             label="Password"
             name="password"
             onChange={handleOnChange} 
             type="password"
             variant="standard" />
             <br />
              <Button  sx={{width: '75%', m: 1}} variant="contained" type="submit">Login</Button>
            </form>}
            {
                isLogin && <CircularProgress />
            }
            {user.email && <Alert severity="success">Successfully login!</Alert>}
         {/* {error && <Alert severity="success">{error}</Alert>} */}
            <NavLink
            style={{textDecoration: 'none'}}
            to="/register">New user? Please Register</NavLink>

             <p>-----------------------------------Or----------------------------</p>
              <Button variant="contained" onClick={handleSignInGoogle}>Google with Sign In</Button> 
            </Grid>
            <Grid item xs={12} md={6}>
            <img style={{width: '620px', height: '520px'}} src="https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ=" alt="" />
            </Grid>
            </Grid>
        </Container>
           
        </div>
    );
};

export default Login;