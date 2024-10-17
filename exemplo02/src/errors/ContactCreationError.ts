import { ContactErrorMessages } from "../enums/contactErrorMessages";

export class ContactCreationError extends Error{
    constructor(message: ContactErrorMessages){
        super(message);
    }
}