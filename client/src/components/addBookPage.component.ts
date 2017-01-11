import { Book, IBookService, IBookCtrlScope } from '../interfaces';
import * as angular from 'angular';

class AddBookCtrl {
    newBook: any;

    constructor(private bookService: IBookService,
        private $scope: IBookCtrlScope,
        private $state: angular.ui.IStateService) {

    }

    addBook() {
        var book: Book = {
            title: this.newBook.title,
            author: this.newBook.author,
            price: parseInt(this.newBook.price),
            rating: parseInt(this.newBook.rating)
        };
        this.bookService.addBook(book).then( () => this.$state.go('home'));
    }
}

var AddBookPage : angular.IComponentOptions = {
    templateUrl: 'src/templates/add-book.html',
    controller: AddBookCtrl,
    controllerAs: 'ctrl'
};

export default AddBookPage;