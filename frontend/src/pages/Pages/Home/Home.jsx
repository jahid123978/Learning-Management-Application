import React, { useEffect, useState } from 'react';
import useAuth from '../Context/useAuth';
import './Home.css'
import Course from '../Course/Course';
import { Grid } from '@mui/material';

const Home = ({chapters, user, CourseTiles}) => {
    // const {courses} = useAuth();
   let chapters1 = chapters?.slice(4);
   const centerContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
    return (
      <>

    <section id="banner" className='h-1/2'>
       
    {/* <a href="#" className="hire">Get Started Learn</a> */}
        <div className="container">
            <h2>Hi! We Are</h2>
            <h1>Learn anything,
                anytime, anywhere</h1>
            <p className="pera_text">Choosing the right learning management system (LMS) can help achieve this goal. There are certain benefits and features that an LMS can offer that will make corporate learning more effective.</p>
            <a href="/course" className="hire">Get Start Learn</a>
        </div>

            {/* <div className="overlay"></div> */}

    </section>

    
    {/* <!-- banner part end -->

    <!-- about part start --> */}

    <section id="about" className="mt mt-8">
        <div className="tittle">
            <h2>About Us
                <img src="img/tittle_shape.png" alt="title"/>
            </h2>
        </div>
        <div className="container mt">  
            <div className="img">
                <img src="img/about.png" alt="aboutimg"/>
                </div>
        
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <span>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiaeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                        </span>
                    </p>
                </div>
                <div className="clr"></div>
        </div>
        
    </section>

    {/* <!-- about past end -->
    
    <!-- service part start  --> */}

    <section id="service" className="mt">
        {/* <div className="tittle">
            <h2>Our Courses
                <img src="img/tittle_shape.png" alt="tittle"/>
            </h2>
        </div> */}
        <div className='text-center'>
          <h2 className="ml-4  mt-6 text-xl font-bold">
            {/* {user?.role === "Admin" ? "Your Courses" : " Courses"} */}
            Courses
            {/* <img src="img/tittle_shape.png" alt="tittle"/> */}
          </h2>
          <div>
               <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }} style={centerContentStyle}>
            {chapters1 &&
              chapters1.map((chapter) => (
                <CourseTiles key={chapter._id} chapter={chapter} />
              ))}
            </Grid>
          </div>
        </div>
        {/* <div> */}
        {/* <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                sliceArray.map(course=>
                    <Course
                    key = {course._id}
                    course = {course}
                    >

                    </Course>
                )
            }
            </Grid> */}
        {/* </div> */}
        {/* <div className="container">
    
            <div className="item">
                <div className="round_main">
                    <div className="round_2">
                        <div className="round_3">
                            <img src="img/icon1.png" alt=""/>
                        </div>
                    </div>


                </div>

                <h3>Data Science</h3>
                <p className="pera_text">Lorem ipsum dolor sit amet, consectetpisg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="item">
                <div className="round_main">
                    <div className="round_2">
                        <div className="round_3">
                            <img src="img/icon2.png" alt=""/>
                        </div>
                    </div>


                </div>

                <h3>Web Design</h3>
                <p className="pera_text">Lorem ipsum dolor sit amet, consectetpisg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="item">
                <div className="round_main">
                    <div className="round_2">
                        <div className="round_3">
                            <img src="img/icon2.png" alt=""/>
                        </div>
                    </div>


                </div>

                <h3>Web Development</h3>
                <p className="pera_text">Lorem ipsum dolor sit amet, consectetpisg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className="item mar">
                <div className="round_main">
                    <div className="round_2">
                        <div className="round_3">
                            <img src="img/icon3.png" alt=""/>
                        </div>
                    </div>


                </div>

                <h3>Graphic Design</h3>
                <p className="pera_text">Lorem ipsum dolor sit amet, consectetpisg elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
           
            <div className="clr"></div>
        </div> */}
       
    </section>



    <section id="team" className="mt">
        <div className="tittle">
            <h2>Our Teachers
                <img src="img/tittle_shape.png" alt="tittle"/>
            </h2>
        </div>
        <div className="container">
            <div className="item">
                <div className="img">

                    <img src="img/team-1.png" alt=""/>
                    <div className="social_link">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text">
                    <h2>Nur Uddin</h2>
                    <p>Web Design</p>
                </div>
            </div>
           
            <div className="item">
                <div className="img">

                    <img src="img/team-2.png" alt=""/>
                    <div className="social_link">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text">
                    <h2>Tamanna Mezi</h2>
                    <p>Web Development</p>
                </div>
            </div>

            <div className="item">
                <div className="img">

                    <img src="img/team-3.png" alt=""/>
                    <div className="social_link">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text">
                    <h2>Habib Bhuyaan</h2>
                    <p>Data Science</p>
                </div>
            </div>

            <div className="item mar">
                <div className="img">

                    <img src="img/team-4.png" alt=""/>
                    <div className="social_link">
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="text">
                    <h2>Eleyna</h2>
                    <p>Graphic Design</p>
                </div>
            </div>

            <div className="clr"></div>
        </div>
    </section>


    {/* <!-- teacher part end -->

    <!-- testi part start --> */}

    <section id="testimonial" className="mt">
        <div className="tittle">
            <h2>Testimonial
                <img src="img/tittle_shape.png" alt="tittle"/>
            </h2>
        </div>
        <div className="container">
            <div className="item">
                <div className="img">
                    <img src="img/testi-1.png" alt=""/>
                </div>
                <div className="details">
                    <div className="shape"></div>
                   <div className="name_info">
                    <h2>Emon Khan</h2>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half"></i>
                    <p>Chairman</p>
                   </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita quod fugiat vero dolorem illum natus dolor officia, accusamus ducimus!</p>
                </div>
            </div>

            <div className="item mar">
                <div className="img">
                    <img src="img/testi-2.png" alt=""/>
                </div>
                <div className="details">
                    <div className="shape"></div>
                   <div className="name_info">
                    <h2>Miraz Ullah</h2>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half"></i>
                    <p>Director</p>
                   </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita quod fugiat vero dolorem illum natus dolor officia, accusamus ducimus!</p>
                </div>
            </div>
            <div className="clr"></div>
            
        </div>
    </section>
      </>
    );
};

export default Home;