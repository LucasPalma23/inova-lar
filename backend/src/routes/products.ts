import { Router } from "express";
import { createProduct, updateProduct, deleteProduct, getProducts } from "../controllers/products/productsController";

const router = Router();

router.post("/admin/products/create-product", createProduct);
router.put("/admin/products/update-product/:id", updateProduct);
router.delete("/admin/products/delete-product/:id", deleteProduct);
router.get("/admin/products/list-products", getProducts);

export default router;
