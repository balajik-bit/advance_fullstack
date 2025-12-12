import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();

import authRoutes from './routes/authRoutes.js';
import StudyPlanRoutes from './routes/studyPlanRoutes.js';
import { connectDB } from './config/db.js';
import StudyPlan from './models/StudyPlan.js';
connectDB();

const app = express();
app.use(cors({"origin": "*"}));
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', StudyPlanRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});