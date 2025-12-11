import express from 'express';
import { createStudyPlan, deleteStudyPlan, editStudyPlan, getStudyPlans } from '../controllers/studyPlanController.js'
import { get } from 'mongoose';


const router = express.Router();


router.post('/studyplan', createStudyPlan);
router.get('/studyplan', getStudyPlans);
router.put('/studyplan/:id', editStudyPlan);

router.delete('/studyplan/:id', deleteStudyPlan)

export default router;
