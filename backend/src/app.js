import express from 'express';
import 'dotenv/config';
import authRoutes from '../src/routes/auth.routes.js'
import passRoutes from '../src/routes/pass.routes.js'


const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes );
app.use('api/passwords', passRoutes)

export default app