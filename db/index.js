import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB= async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)
        console.log(`MongoDB connected! DB Host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('ERROR: ',error);
        process.exit(1)
    }
}
export default connectDB