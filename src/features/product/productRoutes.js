import express from "express";
import ProductController from "./productController.js";

const router = express.Router()

const productController = new ProductController

router.get('/', productController.getAllProducts)
router.post('/', productController.addProduct)
router.post('/', productController.rateProduct)
router.get('/', productController.getOneProduct)


export default router;