import express from 'express';
import { signIn, signUp } from '../controllers/auth/publicAuthController.js';
import { login } from '../controllers/auth/privateAuthController.js';
import auth from '../middlewares/auth/authMiddleware.js';

const router = express.Router();

router.post("/cadastro", signUp);
router.post("/login", signIn);
router.get("/listar-usuario", auth, login);

export default router;
