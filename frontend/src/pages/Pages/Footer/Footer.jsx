import React from "react";
import './Footer.css'
const Footer = () =>{
    return(<>
        <footer>
        <div className="container footer-container">
            <div className="item item_1">
                <img src="img/1.gif" alt=""/>
                <p className="pera_text">Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiumod apor incididunt ut labore et dolore magna aliqua.
                    <span>Lorem ipsum dolor sit amet, conser adipisicing elit.</span>
                </p>

            </div>
            <div className="item item_2">
                <h2>Contract Us</h2>
                <div className="icon_link">
                    <i className="fa-solid fa-phone"></i>
                    <a href="tel:01829942030">+8801829942030</a>
                    <a href="tel:01829942030">+8801829942030</a>
                </div>
                <div className="icon_link">
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:elearning@gmail.com">elearning@gmail.com</a>
                    <a href="mailto:elearning@gmail.com">elearning@gmail.com</a>
                </div>
                <div className="icon_link">
                    <i className="fa-solid fa-globe"></i>
                    <a href="wapto:www.beatls.com">www.Elearning.com</a>
                    <a href="wapto:www.beatls.com">www.Elearning.com</a>
                </div>
            </div>

            <div className="item item_3">
                <h2>Important Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Our Teachers</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <ul className="ami">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </div>

            <div className="item item_4 mar">
                <h2>Flicker Photos</h2>
                <div className="img">
                    <img src="img/flicker-1.png" alt=""/>
                </div>
                <div className="img">
                    <img src="img/flicker-2.png" alt=""/>
                </div>
                <div className="img mar">
                    <img src="img/flicker-3.png" alt=""/>
                </div>
                <div className="img">
                    <img src="img/flicker-4.png" alt=""/>
                </div>
                <div className="img">
                    <img src="img/flicker-5.png" alt=""/>
                </div>
                <div className="img mar">
                    <img src="img/flicker-6.png" alt=""/>
                </div>
            </div>

            <div className="clr"></div>
           
            
        </div>
        <p className="copyright">
            Copyright &copy; 2017. All rights reserved by <a href="#">ELEARNING</a>
        </p>
    </footer>

        </>)
}
export default Footer;