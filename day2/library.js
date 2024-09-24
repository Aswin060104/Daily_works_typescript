var book_self = [0, 0, 0, 0, 0];
var book = [1, 1, 4, 3, 4];
for (var i = 0; i < book.length; i++) {
    var tem = book[i];
    if (book_self[tem] == 0) {
        console.log("Book ".concat(tem, " is Available"));
        book_self[tem] = 1;
    }
    else {
        console.log("Sorry, Book is not Available \nAvailable books");
        for (var i_1 = 0; i_1 < 5; i_1++) {
            if (book_self[i_1] == 0)
                console.log("Book ".concat(i_1 + 1));
        }
        console.log();
    }
}
