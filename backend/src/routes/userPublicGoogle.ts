import { Router } from "express";
import { auth } from "../utils/auth";

const router = Router();

router.use("/auth/public/google", auth);

export default router;
