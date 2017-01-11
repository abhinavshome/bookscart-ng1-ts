var booksApi = {

    getAll: function(req, res) {
        var allBooks = books; // Spoof a DB call
        res.json(allBooks);
    },

    getOne: function(req, res) {
        var id = req.params.id;
        var book = findById(id); // Spoof a DB call
        res.json(book);
    },

    create: function(req, res) {
        var newBook = req.body;
        newBook.id = ++lastIdUsed;
        books.push(newBook); // Spoof a DB call
        res.json(newBook);
    },

    update: function(req, res) {
        var updateBook = req.body;
        var id = parseInt(req.params.id);
        index = findIndexById(id);
        books[index] = updateBook // Spoof a DB call
        res.json(updateBook);
    },

    delete: function(req, res) {
        var id = parseInt(req.params.id);
        var index = findIndexById(id);
        books.splice(index, 1) // Spoof a DB call
        res.json(true);
    }
};

var lastIdUsed = 4;

function findById(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            return books[i];
        }
    }
}

function findIndexById(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            return i;
        }
    }
}

var books = [{
        title: 'The Alcheimst',
        author: 'Paulo Cohelo',
        price: 20,
        rating: 2,
        id: 1
    }, {
        title: 'THE NIGHTINGALE',
        author: 'Paulo Cohelo',
        price: 10,
        rating: 1,
        id: 2
    }, {
        title: 'Harry Potter',
        author: 'J K Rowling',
        price: 50,
        rating: 5,
        id: 3
    }, {
        title: 'The monk who sold his ferrari',
        author: 'Robin Sharma',
        price: 30,
        rating: 3,
        id: 4
    }];

module.exports = booksApi;
