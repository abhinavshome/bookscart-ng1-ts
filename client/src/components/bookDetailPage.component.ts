import { IBookService, Book } from '../interfaces';

class BookDetailCtrl {
    book: Book;
    constructor(private bookService: IBookService, $stateParams) {
        var idToFind = $stateParams.id;
        bookService
            .getBook(idToFind)
            .then((response: any) => {
                this.book = response.data;
            });
    }
}

var BookDetailPage : angular.IComponentOptions = {
    templateUrl: 'src/templates/book-detail.html',
    controller: BookDetailCtrl,
    controllerAs: 'ctrl'
};

export default BookDetailPage;