import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

const Connection = async ()=>{
    //const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@whatsapp-clone.stksr9m.mongodb.net/?retryWrites=true&w=majority&appName=whatsapp-clone`;
    try {
        await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with databse', error.message);
    }
}

export default Connection;