import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router';
import useAuth from '../Context/useAuth';
import './Header.css'
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useLogout } from '../../../hooks/useLogout';
import Swal from "sweetalert2";
const Header = () => {
    // const [department, setDepartmet] = useState({});
    // const {detailsId} = useParams();
    // const history = useHistory();
    // const {service} = useAuth();
    // console.log(service);

    // useEffect(()=>{
    //   const neItem = service.find(data => data.id == detailsId);
    //   setDepartmet(neItem);
    //   console.log(neItem);
    // }, [service])
  
    // const handleToGoHome = () => {
    //     history.push('/home');
    // }
    const navigate = useNavigate();
    // const { user } = useAuthContext();
    // const {user, LogOut, admin} = useAuth();
    const handleLogin = () => {
        navigate('/login');
    }
    const { logout } = useLogout();
    const user = JSON.parse(localStorage.getItem("user"));
    const handleClick = () => {
      Swal.fire({
        title: "Do you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          logout();
          Swal.fire("Logged out !", "You have been logged out", "success");
          navigate("/login");
        }
      });
    };
    // console.log("user: ", user)
    return (
      <>
         <header id="header">
        <div className="container">
            <div className="left">
                <p className="pera_text">Welcome to Elearning</p>
            </div>
            <div className="right">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
            </div>
            <div className="clr"></div>
        </div>
    </header>

    {/* <!-- menu part start --> */}

    <nav id="main_manu">
        <div className="container nav-container">
            <div className="logo">
            {/* <Link style={{color: 'black', textDecoration: 'none'}} to="/"></Link> */}
                <a href="/" style={{paddingTop:'15px'}}><img src="img/1.gif" alt="logo"/></a>
            </div>
            <div class="manu">
                <ul>
                    <li><Typography textAlign="center"><Link style={{color: 'black', textDecoration: 'none', paddingTop:'30px'}} to="/">HOME</Link></Typography></li>
                    {/* <li><a className="pera_text" href="/courses">COURSES</a></li> */}
                    <li><Typography textAlign="center"><Link style={{color: 'black', textDecoration: 'none'}} to="/courses">COURSES</Link></Typography></li>
                    <li><Typography textAlign="center"><Link style={{color: 'black', textDecoration: 'none'}} to="#">OUR TEACHERS</Link></Typography></li>
                   {user?.role === "Admin" && <li><Typography textAlign="center"><Link style={{color: 'black', textDecoration: 'none'}} to="/Student-List">OUR LEARNERS</Link></Typography></li>}
                   {/* {user?.role === "Admin" && <li><Typography textAlign="center"><Link style={{color: 'black', textDecoration: 'none'}} to="/Meet">CREATE MEETING</Link></Typography></li>} */}
                    <li><Typography textAlign="center"><Link style={{color: 'black', textDecoration: 'none'}} to="/Chat">CONTACT</Link></Typography></li>
                    <li><Typography textAlign="center"><Link style={{color: 'black', textDecoration: 'none'}} to="#">ABOUT US</Link></Typography></li>
                    <li>{user && <Button style={{color: 'black'}}>{user?.name}</Button>} </li>
                    <li> {user?.email? <Button onClick={handleClick} style={{color: 'black'}}>Logout</Button> : <Button onClick={handleLogin} style={{color: 'black'}}>LOG IN/REGISTRATION</Button>}</li>                     
                </ul>
            </div>
        </div>
    </nav>
      </>
    );
};

export default Header;