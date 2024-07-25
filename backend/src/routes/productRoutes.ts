import { Router } from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { createUser, getUser } from '../controllers/userController';


const router = Router();

// User routes
router.post('/getUser', getUser); //method for sending data to an API
router.post('/createUser', createUser); //method for sending data to an API

// Product routes
router.get('/products', getProducts); //used for retrieving data
router.get('/products/:id', getProductById); // used for retrieving data
router.post('/products', createProduct); //method for sending data to an API
router.put('/products/:id', updateProduct); // method is used to update or replace 
router.delete('/products/:id', deleteProduct); // used to remove or delete a resource

export default router;
