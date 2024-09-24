var book_self : number[] = [0,0,0,0,0];

var book : number[] = [1,1,4,3,4]

for (let i = 0; i < book.length; i++) { 
    var tem : number = book[i];
    if(book_self[tem] == 0){
        console.log(`Book ${tem} is Available`);
        book_self[tem] = 1;
    }
    else{
        console.log("Sorry, Book is not Available \nAvailable books");
        for (let i = 0; i < 5; i++) {
            if(book_self[i] == 0)
                console.log(`Book ${i+1}`);
        }
        console.log();
    }
}