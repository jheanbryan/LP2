import { Client } from "./Client";
import { BankAccount } from "./BankAccount";

//suíte de destes com funcao describe
describe('Tests over bank account use cases', () => {
    it("Should have 0 balance when account is created", () => {
        const client = new Client("John Doe", "000.00.00.000-00");
        const account = new BankAccount("12345-6", '123-4', client);
        const balance = account.statement();

        const formater = Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        const expectedValue = formater.format(0);
        expect(balance).toBe(expectedValue);
    });
});
