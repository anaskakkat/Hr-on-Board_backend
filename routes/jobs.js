import { Router } from 'express';
import { createJob, getJobs } from '../controller/jobController.js';
import authMiddleware from '../middleware/auth.js';

const router = Router();
router.post('/', authMiddleware('recruiter'), createJob);
router.get('/', getJobs);

export default router;