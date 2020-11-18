var books = [
    {title : 'Geetanjali',
    author : 'Rabindra Nath Tagore',
    alreadyread : false
    },
    {title : 'The Hobbit',
    author : 'J.R.R. Tolkien',
    alreadyRead : true
    }
];
for(var i = 0; i < books.length; i++){
    var book = books[i];
    var bookInfo = book.title + ' by ' + book.author;
    if (book.alreadyread) {
        console.log('You already read ' + bookInfo);
    }else {
        console.log('You still need to read ' + bookInfo);
    }
}