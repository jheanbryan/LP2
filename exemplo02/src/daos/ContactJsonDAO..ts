import { Contact } from "../models/Contact";
import contacts from '../data/contacts.json'
import { dirname, join } from "path";
import { readFileSync, writeFile, writeFileSync } from "fs";
import { ContactCreationError } from "../errors/ContactCreationError";
import { ContactErrorMessages } from "../enums/contactErrorMessages";

export class ContactJsonDAO{
    private _contacts: Contact[];

    constructor() {
        const filesPath = join(__dirname, '..', 'data',  'contacts.json');
        const contactsStr = readFileSync(filesPath, 'utf-8');
        const contacts = JSON.parse(contactsStr);


        this._contacts = contacts.map((c) => {
            const { _name, _phone, _email, _address, _birthday } = c;
            return new Contact( _name, _phone, _email, _address, new Date(_birthday));
        });
    }

    save(contact: Contact) {
        if(!this.findUserByEmail(contact.email)){
            this._contacts.push(contact);
            const contactSrt = JSON.stringify(this._contacts);
            const filesPath = join(__dirname, '..', 'data', 'contacts.json');
            writeFileSync(filesPath, contactSrt);
        } else{
            throw new ContactCreationError(ContactErrorMessages.EMAIL_ALREADY_EXIST_MESSAGE);
        }
    }

    findUserByEmail(email: string){
        const contact = this._contacts.find((c) => c.email == email);
        return contact;
    }
}