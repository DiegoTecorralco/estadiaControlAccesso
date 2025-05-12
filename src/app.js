//IMPORTS
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRoutes.js';

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

//SETINGS
const PORT = 3100;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

mongoose.connect("mongodb+srv://Carlos:1234567890@carlos52.fcnaz.mongodb.net/ControlAcceso?retryWrites=true&w=majority&appName=Carlos52")

.then(() =>{
    console.log("MongoDB Atlas Connected")
}) 
.catch ((error)=>{
    console.error('error trying connected to MongoDB',error);
})
 export default app;

 //ROUTES

 app.use('/api/student', studentRouter)