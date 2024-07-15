 import mongoose from "mongoose";
 const connectDB = async()=>{
    const connect = await mongoose.connect("mongodb://localhost:27017/student_crud");
    if(connect){
        console.log("connected to database successfylly..");

    }else{
        console.log("failed to connect to database");
    }
 };

 export default connectDB;