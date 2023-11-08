import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Course = ({course}) => {
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/courseDetails/${course._id}`)
    }
    return (
        <div>
             <Grid item xs={12} sm={12} md={4}>
             <Card sx={{width:'380px', height: '500px', margin: '10px 10px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={course.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {course.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Course Duration: {course.time}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Course Price: {course.price}
          </Typography>
          {/* <Typography gutterBottom variant="h5" component="div">
            Years: {loan.time}
          </Typography> */}
            <Button onClick={handleDetails} style={{marginLeft: '250px'}}>Details</Button>
        </CardContent>
      </CardActionArea>
    </Card>
             </Grid>
        </div>
    );
};

export default Course;