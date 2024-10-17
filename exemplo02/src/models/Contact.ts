import * as EmailValidator from "email-validator";

import { ContactErrorMessages } from "../enums/contactErrorMessages";
import { ContactCreationError } from "../errors/ContactCreationError";

export class Contact {
  private __name: string = "";
  private __phone: string = "";
  private __email: string = "";
  private __address?: string;
  private __birthday?: Date;

  //name
  set name(name: string) {
    if (name.trim().length >= 5) this.__name = name;
    else
      throw new ContactCreationError(ContactErrorMessages.NAME_ERROR_MESSAGE);
  }

  get name(): string {
    return this.__name;
  }


  //phone
  set phone(phone: string) {
    if (/^\(d{2}\)\s\d{5}-d{4}$/.test(phone)) this.__phone = phone;
    else
      throw new ContactCreationError(ContactErrorMessages.PHONE_ERROR_MESSAGE);
  }

  get phone() {
    return this.__phone;
  }


  //email
  set email(email: string) {
    if (EmailValidator.validate(email)) this.__email = email;
    else
      throw new ContactCreationError(ContactErrorMessages.EMAIL_ERROR_MESSAGE);
  }

  get email(){
    return this.__email;
  }


  //address
  set  address(address: string) {
    if (address.trim().length >= 5) 
      this.__address = address;
    else
      throw new ContactCreationError(ContactErrorMessages.ADDRESS_ERROR_MESSAGE);
  }

  get address(){
    return this.__address;
  }

  //birthday
  set birthday(birthday: Date){
    if (birthday < new Date())
      this.__birthday = birthday;
    else
      throw new ContactCreationError(ContactErrorMessages.BIRTHDAY_ERROR_MESSAGE);
  }

  get birthday(){
    return this.__birthday;
  }
}
