import { Router } from "express";
import { auth } from "../services/auth";

const router = Router();

router.use("/auth/public/google", auth);

export default router;
