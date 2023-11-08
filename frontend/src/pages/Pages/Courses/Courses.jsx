import { Grid } from '@mui/material';
import React from 'react';
import Course from '../Course/Course'
import useAuth from '../Context/useAuth';

const Courses = () => {
    const {courses} = useAuth();
    return (
        <div>
            {/* <h2 sx={{textAlign: 'center'}}>Our Courses</h2> */}
            <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    courses.map(course =>
                        <Course
                        key = {course._id}
                        course = {course}
                        >    
                        </Course>
                       
                        
                        )
                }

            </Grid>
        </div>
    );
};

export default Courses;