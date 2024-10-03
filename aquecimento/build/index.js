"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 2));
const fullName = 'Ciclano';
const phone = '(67) 99909-9999';
const email = 'email@email.com';
const birthday = new Date('1990-01-01');
const contact1 = {
    name: fullName,
    phone,
    email,
    birthday
};
console.log(contact1);
const contact2 = {
    name: 'fulano',
    phone: '(80) 90909090'
};
console.log(contact2);
