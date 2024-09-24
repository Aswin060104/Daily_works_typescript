type Person = {
    name : string
}
type Contact = {
    phone : number
}

type fullDetails = Person & Contact;

var person : fullDetails = {
    name : "Arul",
    phone : 9944054321
}

console.log(person);