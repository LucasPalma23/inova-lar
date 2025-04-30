import { Router } from "express";
import { addProductToCart, editProductOfCart, deleteProductOfCart, getCart } from "../controllers/cart/cartController";

const router = Router();

router.post("/public/cart/add-to-cart", addProductToCart);
router.put("/public/cart/edit-cart/:id", editProductOfCart);
router.delete("/public/cart/delete-of-cart/:id", deleteProductOfCart);
router.get("/public/cart/get-cart", getCart);

export default router;
