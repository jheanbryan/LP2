import { ProductErrorMessages } from "../enums/productErrorMessages";

export class ProductCreationError extends Error{
    constructor(message: ProductErrorMessages){
        super(message);
    }
}