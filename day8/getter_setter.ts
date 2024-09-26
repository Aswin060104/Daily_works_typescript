class bank implements bankFunctionality{
    accountNumber = 10234;
    private balance = 0;

    getBalance(): number {
        return this.balance;
    }

    setBalance( amount : number) : void {
        this.balance = amount;
    }
    creditAmount(amount: number): string {
        this.balance += amount;
        return "Balance "+this.getBalance();
    }

    debitAmount(amount: number): string {
        this.balance -= amount;
        return "Balance  "+this.getBalance();
    }
}

interface bankFunctionality{
    getBalance() : number;
    creditAmount(amount : number) : string;
    debitAmount( amount : number) : string;
}

var b = new bank();
b.setBalance(10);
console.log(b.creditAmount(1000));
console.log(b.debitAmount(500));