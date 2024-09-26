var phone1 = /** @class */ (function () {
    function phone1() {
        this.phoneName = "Redmi";
        this.phoneCost = 17000;
    }
    phone1.prototype.getPhoneName = function () {
        return this.phoneName;
    };
    phone1.prototype.getPhoneCost = function () {
        return this.phoneCost;
    };
    return phone1;
}());
var phone2 = /** @class */ (function () {
    function phone2() {
        this.phoneName = "Poco";
        this.phoneCost = 15000;
    }
    phone2.prototype.getPhoneName = function () {
        return this.phoneName;
    };
    phone2.prototype.getPhoneCost = function () {
        return this.phoneCost;
    };
    return phone2;
}());
var p1 = new phone1();
var p2 = new phone2();
console.log(p1.getPhoneName() + " " + p1.getPhoneCost());
console.log(p2.getPhoneName() + " " + p2.getPhoneCost());
