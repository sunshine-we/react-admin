import express from 'express'
import { getUser } from '../controllers/general.js';
const router = express.Router();

router.get("/user/:id",getUser)
router.get('/dashboard')

export default router