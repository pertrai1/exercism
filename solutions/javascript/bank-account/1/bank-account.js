//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {}

  open() {
    if (this.isOpened === true) {
      throw new ValueError();
    }
    this.amount = 0;
    this.isClosed = false;
    this.isOpened = true;
  }

  close() {
    if (this.isClosed === true) {
      throw new ValueError();
    }
    this.isClosed = true;
    this.isOpened = false;
    this.amount = 0;
  }

  deposit(amount) {
    if (amount < 0 || this.isClosed === true) {
      throw new ValueError();
    }
    this.amount += amount;
  }

  withdraw(amount) {
    if (amount < 0 || amount > this.amount || this.isClosed === true) {
      throw new ValueError();
    }
    this.amount -= amount;
  }

  get balance() {
    if (this.isClosed === true) {
      throw new ValueError();
    }
    return this.amount;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
