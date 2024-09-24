var getNames : (...names : string[]) => void;

getNames = (...names) => {
    console.log(names);
    for (var i of names){
        console.log(i);
    }
}
getNames("Aswin","Arul","Sugu","Manoj");
