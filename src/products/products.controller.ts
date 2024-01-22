import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}

    @Post()
    addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string, 
    @Body('price') prodPrice: number
     ): any {
      const generatedId = this.productService.insertProduct(
        prodTitle,
        prodDesc,
        prodPrice,
        ); 
        return {id: generatedId }
    };

    @Get()
    getAllProds() {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getProdById(@Param('id') prodId: string ) {
        return this.productService.getSingleProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
    @Param('id') prodId: string, 
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string, 
    @Body('price') prodPrice: number ) {
      this.productService.editProduct(prodId,prodTitle,prodDesc,prodPrice)
      return 'Successful Updated';
    }

   


}