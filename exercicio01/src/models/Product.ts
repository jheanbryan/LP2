import { ProductErrorMessages } from "../enums/productErrorMessages";
import { ProductCreationError } from "../errors/ProductCreationError";

export class Product {
  private __description: string = "";
  private __qty: number = 0;
  private __value: number = 1;
  private __cod: string = "";
  private __stock_entry_date: Date;

  //description
  set description(description: string) {
    if (description.trim().length >= 10) this.__description = description;
    else
      throw new ProductCreationError(ProductErrorMessages.DESCRIPTION_ERROR_MESSAGE);
  }

  get description(): string {
    return this.__description;
  }


  //qty
  set qty(qty: number) {
    if (qty > 0 && qty < 99)
      this.__qty = qty;
    else 
      throw new ProductCreationError(ProductErrorMessages.QUANTITY_ERROR_MESSAGE);
    
  }

  get qty() {
    return this.__qty;
  }


  //value
  set value(value: number) {
    if (value >= 1) 
      this.__value = value;
    else
      throw new ProductCreationError(ProductErrorMessages.VALUE_ERROR_MESSAGE);
  }

  get value(){
    return this.__value;
  }


  //cod
  set  cod(cod: string) {
    if ((/^[A-Z]{3}-\d{4}$/).test(cod)) 
      this.__cod = cod;
    else
      throw new ProductCreationError(ProductErrorMessages.COD_ERROR_MESSAGE);
  }

  get cod(){
    return this.__cod;
  }

  //stock_entry_date
  set stock_entry_date(stock_entry_date: Date){
    if (stock_entry_date < new Date())
      this.__stock_entry_date = stock_entry_date;
    else
      throw new ProductCreationError(ProductErrorMessages.STOCK_ENTRY_DATE_ERROR_MESSAGE);
  }

  get stock_entry_date(){
    return this.__stock_entry_date;
  }
}
