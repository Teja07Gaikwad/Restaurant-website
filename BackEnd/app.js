import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './database/dbconnection.js';
import ErrorHandler from './middlware/error.js';
import routes from './routes/reservationRoutes.js';

const app = express();
dotenv.config({path: "./config/.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['POST'],
    credential: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/reserve', routes)
dbConnection()
app.use(ErrorHandler)
export default app;

