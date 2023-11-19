// import { useModuleContext } from "../hooks/useModuleContext";
import { useLocation,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Collapsible from "../componets/Collapsible";
// import { useAuthContext } from "../hooks/useAuthContext";
// import BreadCrumbs from "../componets/BreadCrumb";
import { Grid } from "@mui/material";
import Breadcrumbs from "../../componets/BreadCrumb";
import Collapsible from "../../componets/Collapsible";

const PurchasedCourse = () => {
  const location = useLocation();
  const propsData = location.state;
  const { file, fileLink} = propsData;
  console.log("file: ", file, " fileLink: ", fileLink)
  const navigate=useNavigate()
  const moduleAdd = {
    _id: propsData._id,
  };
  // useEffect(()=>{
  //     dispatch({type:'SET_MODULE',payload:units})
  // },[dispatch])

 
 

  return (
      <>
      <Breadcrumbs />

      <div className=" flex flex-col ">
        <div className="flex  flex-col justify-between md:mx-6">
          <h1 className="ml-4 md:mt-10  mt-2 mb-4 text-xl font-black  flex">
            Course overview
          </h1>
        </div>
        <Grid container  columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={6}>
                <img style={{width: '600px', height: '400px', marginTop: '20px'}} src={propsData?.img} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{marginTop: '20px', textAlign:'left'}}>
           <h1>Course Name: {propsData?.title}</h1>
            <h2>Course Duration: {propsData?.duration}</h2>
            <h2>Course Price: {propsData?.price}</h2>
            <p><span className='font-size'>Description</span>: {propsData?.description}</p>
            <div className="md:mx-10 mx-2 mt-10">
          {file && file.map((files) => <Collapsible unit={files} />)}
          {fileLink && fileLink.map((files) => <Collapsible unit={files} />)}
        </div>
            </Grid>
            </Grid>
       
      
      </div>
      </>
  );
};

export default PurchasedCourse;
