import { ContactJsonDAO } from "./ContactJsonDAO.";
import { Contact } from "../models/Contact";
import { join } from "path";
import { readFileSync } from "fs";
import { generateContacts } from "../generateContacts";

let dao: ContactJsonDAO;

describe("Tests over ContactsJsonDAO class", () => {
  beforeAll(() => {
    generateContacts();
    dao = new ContactJsonDAO();
  });

  it("shold save a new contacts with distinct email", () => {
    const contact = new Contact(
      "Fulano de  Tal",
      "fulano@example.com",
      "(00) 99999-9999",
      "Rua dos fulanos, 123",
      new Date("1990-12-12")
    );

    dao.save(contact);
    const filesPath = join(__dirname,  "..", "data", "contacts.json");
    const contactsStr = readFileSync (filesPath, "utf8");
    const contactsArr = JSON.parse(contactsStr);
    const lastContact = contactsArr[contactsArr.length - 1];
    expect(lastContact.email).toBe(contact.email); 
  });
});
