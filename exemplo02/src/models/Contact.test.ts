import { Contact } from './Contact'
import { ContactCreationError } from '../errors/ContactCreationError';
import { ContactErrorMessages } from '../enums/contactErrorMessages';

describe('Tests over Contact Class', () => {
    it('shoud create a contact with valid inputs', () => {

        const nameValue = 'Ciclano';
        const phoneValue = '(00) 00000-0000';
        const emailValue = 'ciclano@gmail.com';
        const addressValue = 'Rua da Praia, 123, São Paulo, SP';
        const birthdayValue = new Date('2011-11-11');

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
        expect(contact.birthday).toBe(birthdayValue)
    });

    it('should not create a contact with invalid name', () => {
        const nameValue = 'Tu';
        try {
            const contact = new Contact;
            contact.name = nameValue;
            fail("It allowed to set an invalid name")
            
        } catch (err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.NAME_ERROR_MESSAGE);
        }
    });

    it('should not create a contact with invalid phone number', () => {
        const contact = new Contact();
        try{
            contact.phone = '1234-1234';
            fail("It allowed to set an invalid number")

        } catch(err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.PHONE_ERROR_MESSAGE);
        };
    })

    it('should not create a contact with invalid email', () => {
        const contact = new Contact();
        try{
            contact.email = 'jo';
            fail("It allowed to set an invalid email")
        } catch(err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.EMAIL_ERROR_MESSAGE);
        };
    });

    it('should not create a contact with invalid address', () => {
        const contact = new Contact();
        try{
            contact.address = 'ee';
            fail("It allowed to set an invalid address")
        } catch(err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.ADDRESS_ERROR_MESSAGE);
        };
    });

    
    it('should not create a contact with invalid birthday', () => {
        const contact = new Contact();
        try{
            contact.birthday = new Date('2025-12-12');
            fail("It allowed to set an invalid birthday")
        } catch(err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.BIRTHDAY_ERROR_MESSAGE);
        };
    });
});