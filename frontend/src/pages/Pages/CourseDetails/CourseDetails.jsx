import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import { useForm } from 'react-hook-form';
import './CourseDetails.css';


const CourseDetails = () => {
    // const [loans, setLoans] = useState([]);
    const [courseD, setCourseD] = useState([]);
    const {courseId} = useParams();
    const {courses, user} = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    useEffect(()=>{
        const findResult = courses.find(course => course._id == courseId);
        // console.log("find", findResult)
        setCourseD(findResult);
    }, [courses])
    // console.log(appliedLoan);

    const onSubmit = data => {
        //  const usersDetails = {status: "Processing", loanName: appliedLoan.name, image: appliedLoan.image, time: appliedLoan.time, price: appliedLoan.price, 
        //  description: appliedLoan.description, name: data.name, email: data.email, panNum: data.number, address: data.address,
        //  years: data.years, amount: data.amount};

        //  fetch('https://sheltered-depths-76360.herokuapp.com/loanRequest', {
        //      method: 'POST',
        //      headers: {
        //          "content-type": "application/json"
        //      },
        //      body: JSON.stringify(usersDetails)
        //  })
        //  .then(res => res.json())
        //  .then(result =>{
        //      alert("Inserted Details Successfully");
        //      reset();
        //  })
        //  navigate('/users')
    }
    return (
        <div>
            {/* <h1>{appliedLoan.name}</h1> */}
            <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <Grid container  columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={6}>
                <img style={{width: '600px', height: '400px', marginTop: '20px'}} src={courseD.image} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{marginTop: '20px', textAlign:'left'}}>
           <h1>Course Name: {courseD.name}</h1>
            <h2>Course Duration: {courseD.time}</h2>
            <h2>Course Price: {courseD.price}</h2>
            <p><span className='font-size'>Description</span>: {courseD.description}</p>
            </Grid>
            </Grid>
              {/* <h1>Provide Your Details</h1> */}
            {/* <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={6}>
            <div style={{textAlign: 'left', marginLeft: '140px'}}>
            <div style={{marginTop:'10px', marginBottom: '1px'}}>
            <label className="name">Name: </label>
            <input style={{padding: '10px', borderRadius: '20px', marginLeft: '45px', width: '250px'}} defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
            </div>
             <br />
             <div style={{marginBottom: '1px'}}>
             <label className="phone">PAN Number: </label>
             <input style={{padding: '10px', borderRadius: '20px', width: '250px'}} placeholder="PAN Number" type="number" {...register("number", )} />
             </div>
              <br />
             <div>
             <label className="address" htmlFor="">Address: </label>
             <input style={{padding: '10px', borderRadius: '20px', marginLeft: '30px', width: '250px'}} placeholder="Address" {...register("address")} />
             </div>
            </div>
            </Grid>
            {/* <Grid item xs={12} sm={12} md={6}>
             <div style={{textAlign: 'left'}}>
             <div style={{marginTop: '10px', marginBottom: '1px'}}>
             <label className="email">Email: </label>
            <input style={{padding: '10px', borderRadius: '20px', marginLeft: '45px', width: '250px'}} defaultValue={user.email} {...register("email")} />
             </div>
              <br />
            <div>
            <label className="city" htmlFor="">Tenure years: </label>
             <input style={{padding: '10px', borderRadius: '20px', width: '250px'}} placeholder="Years" {...register("years")} />
            </div>
            <br />
            <label className="city" htmlFor="">Loan amount: </label>
             <input style={{padding: '10px', borderRadius: '20px', width: '250px'}} placeholder="Amount" {...register("amount")} />
             </div>
            </Grid> */}
            {/* </Grid>  */}
        
         {/* <input className="submit-button" type="submit" value="Submit"/> */}
            </form>
        </div>
    );
};

export default CourseDetails;