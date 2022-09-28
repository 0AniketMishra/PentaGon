import { info } from "console";
import mongoose from "mongoose";

const connectDb = async (handler) => {
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect("mongodb+srv://Aniket:Eleph@nT87777@cluster0.pftf0en.mongodb.net/?retryWrites=true&w=majority")
    return handler(req,res);
}
export default connectDb