interface phoneFunctionality{
    phoneName : string;
    getPhoneName() : string;
    getPhoneCost() : number;
}
class phone1 implements phoneFunctionality{
    phoneName = "Redmi";
    phoneCost : number = 17000;

    getPhoneName(): string {
        return this.phoneName;
    }

    getPhoneCost(): number {
        return this.phoneCost;
    }
}

class phone2 implements phoneFunctionality{
    phoneName : string = "Poco";
    phoneCost : number = 15000;

    getPhoneName(): string {
        return this.phoneName;
    }

    getPhoneCost(): number {
        return this.phoneCost;
    }
}

var p1 = new phone1();
var p2 = new phone2();
console.log(p1.getPhoneName()+" "+p1.getPhoneCost());
console.log(p2.getPhoneName()+" "+p2.getPhoneCost());