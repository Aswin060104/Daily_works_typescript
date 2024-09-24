
var products : { name : string, price : number} [] = [];

products[0] = { name : 'laptop', price : 45000};
products[1] = { name : 'pc', price : 23000};

for(var i = 0; i<2; i++){
    console.log(products[i].name, products[i].price);
}