var person = {
    name : "Aswin",
    getName() {
        return this.name;
    }
}

interface PersonDetails{
    name : string;
    age : number;
}

interface extraDetails extends PersonDetails{
    phone : number;
}

var student : extraDetails = {
    name : "ram",
     age : 20,
     phone : 986563498
}

