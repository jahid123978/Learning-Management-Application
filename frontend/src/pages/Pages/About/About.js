import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
           <div className="head-text">
           <img className="about-image" src="https://media.geeksforgeeks.org/wp-content/uploads/20210121222027/about_desktop-min.png" alt="" /> 
            <div className="button-text">
            {/* <button className="button">Know more</button> */}
            </div>
           </div>
           <div className="about-container">
            <div style={{textAlign:'center', fontSize:'30px', text:'bold'}}>
            <p style={{color: 'green'}}>Community</p>
                <h1>Don't Learn Alone</h1>
                <h3>Be the 'Pro' in the tech side</h3>
            </div>
                <div className="about-us">
                    <div className="container-img">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200917204942/prepare1.png" alt="" />
                        <div>
                            <h2>Prepare With Us</h2>
                            <p>Prepare for an interview with millions of articles and courses designed by experts.</p>
                        </div>
                    </div>
                    <div className="container-img">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200917204940/job1.png" alt="" />
                        <div>
                            <h2>Get Hired With Us</h2>
                            <p>Don’t know where to apply? Stop by E-Learning where we offer multiple opportunities for you to get hired
</p>
                        </div>
                    </div>
                    <div className="container-img"> 
                        <img src="	https://media.geeksforgeeks.org/wp-content/uploads/20200917204936/grow1.png" alt="" />
                    <div>
                        <h2>Grow With Us</h2>
                        <p>Gain and share your knowledge and skills with a variety of learning platforms offered by elarning.Com</p>
                    </div>
                    </div>
                     
                </div>
           </div>
        </div>
    );
};

export default About;