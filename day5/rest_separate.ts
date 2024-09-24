var separate_values : (...values : (number | string)[]) => [string[], number[]];

separate_values = (...v) => {
    var names : string[] = [];
    var age : number[] = [];
    v.forEach((element , index)=>{
        if(typeof element == 'number')
            age.push(element);
        else
            names.push(element);
    });
    return [names, age];
}

console.log(separate_values("Aswin",20,10,"Arul",30));
