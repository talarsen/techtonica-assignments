
function AccountMaker(name) {
  // A `name` property.
  this.name = name;

  // * A `balance` property set to 0.
  this.balance = 0;
}


//// * A `deposit` method adding the (positive or negative) value passed as an argument to the account balance.
AccountMaker.prototype.deposit = function(depositAmount) {
   return  this.balance += depositAmount;
  }


//Create an account for Billy, Rosie, Jack and Jill
const billy = new AccountMaker("Billy");
const rosie = new AccountMaker("Rosie");
const jack = new AccountMaker("Jack");
const jill = new AccountMaker("Jill");
//console.log(billy, jack, rosie, jill);

// //Give each of the accounts a deposit on money
billy.deposit(100);
rosie.deposit(200);
jack.deposit(300.50);
jill.deposit(400.10);
//console.log(billy, jack, rosie, jill);

// A `describe` method returning the account description.
AccountMaker.prototype.describe = function () {
  return `Hello, this is the account of ${this.name} and the balance is $${this.balance}`;
}

// - Print a string describing the current amount of money on each account
// console.log(billy.describe());
// console.log(rosie.describe());
// console.log(jack.describe());
// console.log(jill.describe());

// * A `transfer` method with two paramethers: the name of the account that will receive the transfer, and the amount of money to transfer.
AccountMaker.prototype.transfer = function (transferAmount, receivingAccountName) {
  return `Transfer: ${transferAmount} has been moved from ${this.name} to ${receivingAccountName}'s account`
}

// - Transfer positive values between Billy and Jack and negative values between Rosie and Jack
// console.log(billy.transfer(200,"Jack"));
// console.log(rosie.transfer(-200,"Jack"));


/*********Not in the directions but though I would try adding more and not sure if these methods are needed for the transfer method */
//Check if amount is positive
AccountMaker.prototype.isPositive = function(amount) {
  const isPositive = amount > 0;
  if (isPositive === false) {
    console.error('Amount must be positive!');
    return false;
  }
    return true;
} 

// console.log(`expect "account must be positive`, billy.isPositive(-1))
// console.log(`expect true`, billy.isPositive(5))

//Check if amount is allowed. If balance less the amount is not greater than 0, console.log "You have insufficient funds"
AccountMaker.prototype.isAllowed = function(amount) {
  if (!this.isPositive(amount)) return false;

  const isAllowed = this.balance - amount >= 0;
  if (!isAllowed) {
    console.error('You have insufficent funds!');
    return false;
  }
  return true;
}

//set up withdraw method
Account.prototype.withdraw = function(withdrawAmount) {
    if (this.isAllowed(amount)) {
      this.balance -= amount;
      console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
  }

/********** */
// function Account(name, balance) {
//   this.name = name;
//   this.balance = balance;
// }

// Account.prototype.deposit = function(amount) {
//   if (this._isPositive(amount)) {
//     this.balance += amount;
//     console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
//     return true;
//   }
//   return false;
// }

// Account.prototype.withdraw = function(amount) {
//   if (this._isAllowed(amount)) {
//     this.balance -= amount;
//     console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
//     return true;
//   }
//   return false;
// }

// Account.prototype.transfer = function(amount, account) {
//   if (this.withdraw(amount) && account.deposit(amount)) {
//     console.info(`Transfer: ${amount} has been moved from ${this.name} to ${account.name}`);
//     return true;
//   }
//   return false;
// }


// Account.prototype._isPositive = function(amount) {
//   const isPositive = amount > 0;
//   if (!isPositive) {
//     console.error('Amount must be positive!');
//     return false;
//   }
//   return true;
// }

// Account.prototype._isAllowed = function(amount) {
//   if (!this._isPositive(amount)) return false;

//   const isAllowed = this.balance - amount >= 0;
//   if (!isAllowed) {
//     console.error('You have insufficent funds!');
//     return false;
//   }
//   return true;
// }

// const billy = new Account('Billy', 100);
// const rosie = new Account('Rosie', 0);


// //output.innerText += `before:  a: ${a.balance}, b: ${b.balance}\n`;

// billy.transfer(100, rosie);
// console.log(rosie.balance)
// //output.innerText += `after:  a: ${a.balance}, b: ${b.balance}\n`;