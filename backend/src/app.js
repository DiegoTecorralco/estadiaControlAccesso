//IMPORTS
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRouter from './routes/studentRoutes.js';
import registroRouter from './routes/registroRoutes.js';
import authRouter from './routes/authRoutes.js';

const app = express();

//MIDDLEWARES
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json());
app.use(morgan('dev'));

//SETINGS
const PORT = 3100;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//DB_SETTINGS
mongoose.connect("mongodb+srv://Carlos:1234567890@carlos52.fcnaz.mongodb.net/ControlAcceso?retryWrites=true&w=majority&appName=Carlos52")
.then(() =>{
    console.log("MongoDB Atlas Connected")
}) 
.catch ((error)=>{
    console.error('error trying connected to MongoDB',error);
});

//ROUTES
app.use('/api/student', studentRouter)
app.use('/api/registro', registroRouter);
app.use('/api/auth', authRouter);

 export default app;