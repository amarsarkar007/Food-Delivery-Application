import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://amarsarkar:amarsarkar@cluster0.377vn.mongodb.net/food-delivery-app').then(()=>console.log("DB connected"));
}