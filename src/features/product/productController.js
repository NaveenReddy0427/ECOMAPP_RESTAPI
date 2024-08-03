import ProductModel from "./productModel.js"

export default class ProductController{
    getAllProducts(req, res){
        const products = ProductModel.GetAll()
        res.status(200).send(products)
    }

    addProduct(req, res){
        const {name, price, sizes} = req.body;
        const newProduct = {
            name,
            price:parseFloat(price),
            sizes:sizes.split(','),
            imageUrl: req.file.filename,
        };
        const createdRecord=ProductModel.add(newProduct);
        res.status(201).send(createdRecord);
    }

    rateProduct(){

    }

    getOneProduct(req, res){
        const id = req.params.id;
        const getProduct = ProductModel.get(id)
        if(!getProduct){
            res.status(404).send('Product not found')
        }else{
            res.status(200).send(getProduct)
        }
    }

    filterProducts(req, res) {
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const result = ProductModel.filter(
            minPrice,
            maxPrice,
            category
        );
        res.status(200).send(result);
    }
    
    
} 