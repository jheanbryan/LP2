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

        const contact = new Contact(nameValue, phoneValue,  emailValue, addressValue, birthdayValue);


        expect(contact.name).toBe(nameValue)
        expect(contact.phone).toBe(phoneValue)
        expect(contact.email).toBe(emailValue)
        expect(contact.address).toBe(addressValue)
        expect(contact.birthday).toBe(birthdayValue)
    });

    it('should not create a contact with invalid name', () => {
        const nameValue = 'Tu';
        const phoneValue = '(00) 00000-0000';
        const emailValue = 'ciclano@gmail.com';

        try {
            const contact = new Contact(nameValue, phoneValue, emailValue);
            fail("It allowed to set an invalid name")
            
        } catch (err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.NAME_ERROR_MESSAGE);
        }
    });

    it('should not create a contact with invalid phone number', () => {
        const nameValue = 'Ciclano';
        const phoneValue = '1234-1234';
        const emailValue = 'ciclano@gmail.com';

        try{
            const contact = new Contact(nameValue, phoneValue, emailValue);
            fail("It allowed to set an invalid number")

        } catch(err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.PHONE_ERROR_MESSAGE);
        };
    })

    it('should not create a contact with invalid email', () => {
        const nameValue = 'Ciclano';
        const phoneValue = '(00) 00000-0000';
        const emailValue = 'jo';

        try{
            const contact = new Contact(nameValue, phoneValue, emailValue);
            fail("It allowed to set an invalid email")
        } catch(err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.EMAIL_ERROR_MESSAGE);
        };
    });

    it('should not create a contact with invalid address', () => {
        const nameValue = 'Ciclano';
        const phoneValue = '(00) 00000-0000';
        const emailValue = 'ciclano@gmail.com';
        const addressValue = 'ee';

        try{
            const contact = new Contact(nameValue, phoneValue, emailValue, addressValue);
            fail("It allowed to set an invalid address")
        } catch(err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.ADDRESS_ERROR_MESSAGE);
        };
    });

    
    it('should not create a contact with invalid birthday', () => {
        const nameValue = 'Ciclano';
        const phoneValue = '(00) 00000-0000';
        const emailValue = 'ciclano@gmail.com';
        const birthdayValue = new Date('2025-12-12');

        try{
            const contact = new Contact(nameValue, phoneValue, emailValue, birthdayValue);
            fail("It allowed to set an invalid birthday")
        } catch(err) {
            expect(err).toBeInstanceOf(ContactCreationError);
            expect(err.message).toBe(ContactErrorMessages.BIRTHDAY_ERROR_MESSAGE);
        };
    });
});