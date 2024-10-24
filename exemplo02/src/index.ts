import { Contact } from "./models/Contact";

const contact = new Contact();

try {
  // Acessa o setter de  _name
  contact.name = "Sid";
} catch (err) {
  console.log(err);
}

// Acessa o getter de _name
const contactName = contact.name;
console.log(contactName);
console.log("Mal feito desfeito");