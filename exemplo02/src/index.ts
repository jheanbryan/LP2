import { Contact } from "./models/Contact";

const contact = new Contact();

try {
    //acessa o setter de __name
    contact.name =  "John Doe";
} catch (err) {
    console.log(err)
}



//acessa  o setter de __email
const contactName = contact.name;
console.log(contactName);
