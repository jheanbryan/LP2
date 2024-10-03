import { Contact } from "./models/Contact";

const sum = (a:number, b:number) => {
    return a+b
};

console.log(sum(1, 2));


const fullName: string = 'Ciclano';
const phone: string = '(67) 99909-9999';
const email: string = 'email@email.com';
const birthday: Date = new Date('1990-01-01');

const contact1: Contact = {
    name: fullName,
    phone,
    email,
    birthday
}

console.log(contact1)

const contact2: Contact = {
    name: 'fulano',
    phone: '(80) 90909090'
}

console.log(contact2)


const binary = 0b11;
console.log(binary);
const hex = 0xfa;
console.log(hex);

const big: bigint = 1231314123214234235325353535345093549359350909539n;

const array1: number[] = [];
const array2: number[] = [1, 2, 3, 4,];
array1.push(2);
array2.push(55);


//tupla
const t1: [s]