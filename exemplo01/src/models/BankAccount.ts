import { Client } from "./Client";

export class BankAccount {
  number: string;
  branch: string;
  private _balance: number;
  client: Client;

  constructor(number: string, branch: string, client: Client) {
    this.number = number;
    this.branch = branch;
    this._balance = 0;
    this.client = client;
  }

  deposit(value: number): void {
    if (value > 0) {
      this._balance += value;
    } else {
      console.log("Value must be positive");
    }
  }

  withdraw(value: number): void {
    if (value > 0 && value <= this._balance) {
      this._balance -= value;
    } else {
      console.log("Value must be positive and equal or lower than _balance");
    }
  }

  statement(): string {
    const formatter = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "brl",
    });

    return formatter.format(this._balance);
  }
}