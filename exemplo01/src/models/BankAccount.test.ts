import { Client } from "./Client";
import { BankAccount } from "./BankAccount";

let client: Client;
let account: BankAccount;
let formatter:  Intl.NumberFormat;



//suíte de destes com funcao describe
describe('Tests over bank account use cases', () => {
  beforeAll(() => {
    formatter = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    client = new Client("John Doe", "000.00.00.000-00");
  });

  beforeEach(() => {
    account = new BankAccount("12345-6", '123-4', client);
  });

  it("Should have 0 balance when account is created", () => {
      const balance = account.statement();
      const expectedValue = formatter.format(0);
      expect(balance).toBe(expectedValue);
  });

  it("should allow a positive deposit", () => {
    const value = 25.75;
    account.deposit(value);
    const formatedValue = formatter.format(value);
    const balance = account.statement();
    expect(formatedValue).toBe(balance);
  });

  it("shold not allow a negative deposit", () => {
    const value = -75.57;
    account.deposit(value);
    const formatedValue = formatter.format(0);
    const balance = account.statement();
    expect(formatedValue).toBe(balance);
  });

  it("should allow an withdraw when there is available balance", () => {
    const depositValue = 300;
    account.deposit(depositValue);
    const  withdrawValue = 100;
    account.withdraw(withdrawValue);
    const expectedBalance = formatter.format(depositValue - withdrawValue); 
    const balance = account.statement();
    expect(balance).toBe(expectedBalance);
  });

  it("should not allow an withdraw of a negative value", () => {
    const depositValue = 200;
    account.deposit(depositValue);
    const withdrawValue = -65;
    account.withdraw(withdrawValue);
    const expectedBalance = formatter.format(depositValue);
    const balance = account.statement();
    expect(balance).toBe (expectedBalance)
  });

  it("should not allow an withdraw when there is not avaliable balance", () => {
    const withdrawValue = 300;
    account.withdraw(withdrawValue);
    const expectedBalance = formatter.format(0);
    const balance = account.statement();
    expect(balance).toBe(expectedBalance);
  });
});
