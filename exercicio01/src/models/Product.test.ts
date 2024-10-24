import { Product } from './Product'
import { ProductCreationError } from '../errors/ProductCreationError';
import { ProductErrorMessages } from '../enums/productErrorMessages';

describe('Tests over Product Class', () => {
    it('shoud create a product with valid inputs', () => {

        const descriptionValue = 'Mouse Gamer Dell sem fio';
        const qtyValue = 2;
        const valueValue = 99.90;
        const codValue = 'AAA-0000';
        const stock_entry_dateValue = new Date('2011-11-11');

        const product = new Product;
        product.description = descriptionValue;
        product.qty = qtyValue;
        product.value = valueValue;
        product.cod = codValue;
        product.stock_entry_date = stock_entry_dateValue;

        expect(product.description).toBe(descriptionValue)
        expect(product.qty).toBe(qtyValue)
        expect(product.value).toBe(valueValue)
        expect(product.cod).toBe(codValue)
        expect(product.stock_entry_date).toBe(stock_entry_dateValue)
    });

    it('should not create a product with invalid description', () => {
        const descriptionValue = 'Des';
        try {
            const product = new Product();
            product.description = descriptionValue;
            fail("It allowed to set an invalid description")
            
        } catch (err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.DESCRIPTION_ERROR_MESSAGE);
        }
    });

    it('should not create a product with invalid quantity', () => {
        const product = new Product();
        try{
            product.qty = -2;
            fail("It allowed to set an invalid quantity")

        } catch(err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.QUANTITY_ERROR_MESSAGE);
        };
    })

    it('should not create a product with invalid value', () => {
        const product = new Product();
        try{
            product.value = 0;
            fail("It allowed to set an invalid value")
        } catch(err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.VALUE_ERROR_MESSAGE);
        };
    });

    it('should not create a product with invalid code', () => {
        const product = new Product();
        try{
            product.cod = '222a';
            fail("It allowed to set an invalid code")
        } catch(err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.COD_ERROR_MESSAGE);
        };
    });

    
    it('should not create a product with invalid stock entry date', () => {
        const product = new Product();
        try{
            product.stock_entry_date = new Date('2025-12-12');
            fail("It allowed to set an invalid stock entry date")
        } catch(err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.STOCK_ENTRY_DATE_ERROR_MESSAGE);
        };
    });
});