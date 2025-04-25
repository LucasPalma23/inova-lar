import express from 'express';
import { createProduct, updateProduct, deleteProduct, getProducts } from '../controllers/product/productController.js';

const router = express.Router();

router.post("/product", createProduct);
router.put("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.get("/product", getProducts);

export default router;
