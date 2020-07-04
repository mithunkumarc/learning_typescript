// readonly modifier

class BankAccount {
  readonly accountId: number;// default access modifier is public
  constructor(accountId: number){
    this.accountId = accountId; // initialized here
  }
}

let b: BankAccount = new BankAccount(322);
console.log(b.accountId);
// cannot be changed
b.accountId = 325;//error
