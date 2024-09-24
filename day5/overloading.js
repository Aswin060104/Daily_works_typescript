function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    else if (typeof a == "string" && typeof b === "string")
        return a + b;
    throw new Error("Invalid Arguments");
}
console.log(add(5, 2));
console.log(add("Raja ", "Aswin"));
