import { BankAccount } from "./models/BankAccount";
import { Client } from "./models/Client";

const client1 = new Client();
client1.cpf = '000.00.00.000-00';
client1.name = 'John Doe';

const account1 = new BankAccount();
account1.client = client1;
account1.number = '12345-6';
account1.branch = '123-4';
account1.deposit(150);
account1.withdraw(100)
console.log(account1.statement())