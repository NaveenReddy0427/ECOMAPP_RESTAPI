import express from "express";
import ProductController from "./productController.js";
import upload from "../../middlewares/fileUploadMiddleware.js";

const router = express.Router()

const productController = new ProductController

router.get('/', productController.getAllProducts)
router.post('/', upload.single('imageUrl'), productController.addProduct)
router.post('/', productController.rateProduct)
router.get('/:id', productController.getOneProduct)


export default router;