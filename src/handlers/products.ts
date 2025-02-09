import { Request, Response } from 'express';
import Product from '../models/Product.model';

export const getProducts = async(req: Request, res: Response)=>{
    try {
        const products = await Product.findAll({
            order:[
                ['price','DESC']
            ],
            attributes:{exclude:['createdAt','updatedAt','availability']}
        });
        res.json({ data: products });
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async(req: Request, res: Response)=>{
    try {
        const { id } = req.params; //Debe tener el mismo nombre que le pusimos en el router
        
        const product = await Product.findByPk(id);

        if(!product){
            res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        res.json({ data: product });

    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body);
        res.json({
            data: product
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct= async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if(!product){
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        //Actualizar
        await product.update(req.body);//El req.body tiene los datos entregados por el usuario
        product.save(); //Una vez actualizado, hay que volver a almacenarlo

        res.json({data: product});

    } catch (error) {
        console.log(error);
    }
}

export const updateAvailability=async(req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if(!product){
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        //Actualizar
        product.availability = !product.availability;
        //console.log(product.dataValues.availability)//Es el valor que esta en la base de datos
        await product.save(); 

        res.json({data: product});

    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct=async(req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if(!product){
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        await product.destroy();
        res.json({data: 'Producto eliminado.'})


    } catch (error) {
        console.log(error);
    }
}