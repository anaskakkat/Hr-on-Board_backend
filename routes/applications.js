import { Router } from 'express';
import { applyForJob } from '../controller/applicationController.js';
import authMiddleware from '../middleware/auth.js';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

const router = Router();
router.post('/', authMiddleware('candidate'), upload.single('resume'), applyForJob);

export default router;