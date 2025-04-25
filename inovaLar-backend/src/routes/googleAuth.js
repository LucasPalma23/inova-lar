import express from 'express';
import { googleAuthHandler } from '../controllers/auth/googleAuthHandler.js';

const router = express.Router();

router.post("/auth/google", googleAuthHandler);

export default router;
