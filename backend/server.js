require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const chaptersRoutes=require('./routes/chapters')
const userRoutes=require('./routes/user')

//express app created 
const app=express()
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


//middle vware
app.use(express.json()) //post coming request data checks  
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//route handler
app.use('/api/chapters',chaptersRoutes)
app.use('/api/user',userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT,()=>{
        console.log("listening to port 4000")
})
    })
    .catch((error)=>{
        console.log(error)
    })

