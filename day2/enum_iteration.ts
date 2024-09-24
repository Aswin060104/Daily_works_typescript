enum grade{
    A,
    B,
    C,
    D
}
for(var i in grade){
    if (!isNaN(Number(i)))
        console.log(i);
}