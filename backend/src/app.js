import express from 'express';
import 'dotenv/config';
import cors from "cors";
import authRoutes from '../src/routes/auth.routes.js'


const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/api/auth', authRoutes )




export default app