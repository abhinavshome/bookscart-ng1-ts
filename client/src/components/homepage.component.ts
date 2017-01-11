import { Book, Cart, Item, IBookService, ICartService } from '../interfaces';


class BookCtrl {
    books: Book[];
    cart: Cart;

    static $inject = ['bookService', 'cartService', 'alertService'];

    constructor(private bookService: IBookService,
        private cartService: ICartService, 
        private alertService) {

        this.loadBooks();
    }

    addToCart(book: Book) {
        this.cartService.addToCart(book.title, book.price);
        this.alertService.success(book.title + ' added to cart!');
    }

    loadBooks() {
        this.bookService.getBooks().then( (res) => this.books = res.data);
    }

    rateUp(book: Book) {
        if (book.rating < 5) {
            this.bookService.rateUp(book).then(this.loadBooks);
        }
    }

    rateDown(book: Book) {
        if (book.rating > 1) {
            this.bookService.rateDown(book).then(this.loadBooks);
        }
    }

    deleteBook(book: Book) {
        this.bookService.deleteBook(book).then(this.loadBooks);
    }

    highRated(book: Book) {
        return book.rating > 3;
    }

    cheap(book: Book) {
        return book.price < 20;
    }

    all(book: Book) {
        return true;
    }

    logStarClick(index, title) {
        console.log('star ' + index + ' of book ' + title + ' was clicked');
    }
}

var HomePage : angular.IComponentOptions = {
    templateUrl: 'src/templates/home.html',
    controller: BookCtrl,
    controllerAs: 'ctrl' 
};

export default HomePage;
