let join_values : (...values : (string | number)[]) => [string, number] ;

join_values = (...v) => {
    var all_names : string = "";
    var tot : number = 0;
    for (var i of  v){
        if(typeof i == 'number')
            tot += i;
        else{
            all_names += i;
            all_names += " ";
        }
    }
    return [all_names, tot];
}

console.log(join_values("aswin","arul",5,10));

