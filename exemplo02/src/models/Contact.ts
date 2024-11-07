import * as EmailValidator from "email-validator";

import { ContactErrorMessages } from "../enums/contactErrorMessages";
import { ContactCreationError } from "../errors/ContactCreationError";

export class Contact {
  private _name: string = "";
  private _phone: string = "";
  private _email: string = "";
  private _address?: string;
  private _birthday?: Date;

  constructor (name: string,  phone: string, email: string, address?: string, birthday?: Date) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.birthday = birthday;
    
  }

  //name
  set name(name: string) {
    if (name.trim().length >= 5) this._name = name;
    else
      throw new ContactCreationError(ContactErrorMessages.NAME_ERROR_MESSAGE);
  }

  get name(): string {
    return this._name;
  }


  //phone
  set phone(phone: string) {
    if (/^\(\d{2}\)\s(\d{5}-\d{4})-d{4}$/.test(phone)) {
      this._phone = phone;
    } else {
      throw new ContactCreationError(ContactErrorMessages.PHONE_ERROR_MESSAGE);
    }
  }

  get phone() {
    return this._phone;
  }


  //email
  set email(email: string) {
    if (EmailValidator.validate(email)) this._email = email;
    else
      throw new ContactCreationError(ContactErrorMessages.EMAIL_ERROR_MESSAGE);
  }

  get email(){
    return this._email;
  }


  //address
  set  address(address: string) {
    if (address.trim().length >= 5) 
      this._address = address;
    else
      throw new ContactCreationError(ContactErrorMessages.ADDRESS_ERROR_MESSAGE);
  }

  get address(){
    return this._address;
  }

  //birthday
  set birthday(birthday: Date){
    if (birthday < new Date())
      this._birthday = birthday;
    else
      throw new ContactCreationError(ContactErrorMessages.BIRTHDAY_ERROR_MESSAGE);
  }

  get birthday(){
    return this._birthday;
  }
}
