import { Router } from "express";
import { signUp, signIn } from "../controllers/userAdmin/publicAuthUserAdminController";
import { verifyAuthAdmin } from "../middlewares/userAdmin/adminMiddleware";
import { loginUser } from "../controllers/userAdmin/privateAuthUserAdminController";

const router = Router();

router.post("/auth/admin/register", signUp);
router.post("/auth/admin/login", signIn);
router.get("/auth/admin/dashboard", verifyAuthAdmin, loginUser);

export default router;
