import express from 'express';
import { authAdmin } from '../middlewares/admin/adminMiddleware.js';
import { signUpUserAdmin, signInUserAdmin } from '../controllers/admin/publicAdminAuthController.js';
import { loginUserAdmin } from '../controllers/admin/privateAdminAuthController.js';

const router = express.Router();

router.post("/cadastro-admin", signUpUserAdmin);
router.post("/login-admin", signInUserAdmin);
router.get("/listar-usuario-admin", authAdmin, loginUserAdmin);

export default router;
