import { Contact } from './Contact'
import { ContactCreationError } from '../errors/ContactCreationError';
import { ContactErrorMessages' } from '../enums/contactErrorMessages';

describe('Tests over Contact Class', () => {
    it('shoud create a contact with valid inputs', () => {

        const nameValue = 'Ciclano';
        const phoneValue = '(00) 9999-9999';
        const emailValue = 'ciclano@gmail.com';
        const addressValue = 'Rua da Praia, 123, São Paulo, SP';
        const birthday = new Date('2011-11-11');

        const contact = new Contact;
        contact.name = nameValue;
        contact.phone = phoneValue;
        contact.email = emailValue;
        contact.address = addressValue;
        contact.birthday = birthdayValue;

        expect(contact.name).toBe(nameValue)
        expect(contact.phone).toBe(phoneValue)
        expect(contact.email).toBe(emailValue)
        expect(contact.address).toBe(addressValue)
        expect(contact.birthday).toBe(birthday)
    });

    it('should not create a contact with invalid name', () => {
        const nameValue = 'Tu';
        const phoneValue = '(99)  9999-9999';
        const email = 'fulano@email.com';

        try {
            const contact = new Contact;
            contact.name = nameValue;
            contact.phone = phoneValue;
            contact.email = emailValue;
            
        } catch (error) {
            expect(err.)
        }
    });
});