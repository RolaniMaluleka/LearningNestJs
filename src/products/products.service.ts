import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";


@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number){
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId , title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getAllProducts() {
        return [...this.products];
    }

    getSingleProduct(productId: string){
        const product = this.products.find((prod) => prod.id === productId)
        if(!product){
            throw new NotFoundException('Couldnt find the product')
        }
        return {...product};
    }

    editProduct(productId: string, title: string, desc: string, price: number){

    }
}