import express from "express";
import { signUp, tokenGenerate } from "../controllers/userPublic/publicAuthUserPublicController";
import { signIn } from "../controllers/userPublic/privateAuthUserPublicController";
import { validationTokenAuthPublic } from "../middlewares/userPublic/publicMiddleware";

const router = express.Router();

router.post("/auth/public/register", signUp);
router.post("/auth/public/login", tokenGenerate);
router.get("/auth/public/dashboard", validationTokenAuthPublic, signIn);

export default router;
