var bank = /** @class */ (function () {
    function bank() {
        this.accountNumber = 10234;
        this.balance = 0;
    }
    bank.prototype.getBalance = function () {
        return this.balance;
    };
    bank.prototype.setBalance = function (amount) {
        this.balance = amount;
    };
    bank.prototype.creditAmount = function (amount) {
        this.balance += amount;
        return "Balance " + this.getBalance();
    };
    bank.prototype.debitAmount = function (amount) {
        this.balance -= amount;
        return "Balance  " + this.getBalance();
    };
    return bank;
}());
var b = new bank();
b.setBalance(10);
console.log(b.creditAmount(1000));
console.log(b.debitAmount(500));
