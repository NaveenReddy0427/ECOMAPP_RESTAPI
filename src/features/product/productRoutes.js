import express from "express";
import ProductController from "./productController.js";
import upload from "../../middlewares/fileUploadMiddleware.js";

const productRouter = express.Router()

const productController = new ProductController

productRouter.get('/filter', productController.filterProducts)
productRouter.get('/', productController.getAllProducts)
productRouter.post('/', upload.single('imageUrl'), productController.addProduct)
productRouter.post('/', productController.rateProduct)
productRouter.get('/:id', productController.getOneProduct)



export default productRouter;