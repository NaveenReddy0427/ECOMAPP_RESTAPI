import ProductModel from "./productModel.js"

export default class ProductController{
    getAllProducts(req, res){
        const products = ProductModel.GetAll()
        res.status(200).send(products)
    }

    addProduct(){

    }

    rateProduct(){

    }

    getOneProduct(){

    }
} 