import express from 'express';
import { addToCart, editCart, deleteToCart, getCart } from '../controllers/cart/cartController.js';

const router = express.Router();

router.post("/cart", addToCart);
router.put("/cart/:id", editCart);
router.delete("/cart/:id", deleteToCart);
router.get("/cart", getCart);

export default router;
