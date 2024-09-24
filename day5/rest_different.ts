var getDetails : (...name_age : (string | number)[]) => void ;

getDetails = (...name_age) => {
    for(var j of name_age)
        console.log(j);
}

getDetails("aswin",20,"arul",34);