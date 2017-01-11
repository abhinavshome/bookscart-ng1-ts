import { Book } from '../interfaces';
import * as _ from 'lodash';

interface Summary {
    totalBooks: number;
    bestBook: Book;
}

class BookSummaryCtrl {
    summary: Summary;
    books: Book[];

    static $inject = ['$scope', 'bookService'];

    constructor($scope, bookService) {
        var self = this;
        bookService.getBooks().then(function (response) {
            self.books = response.data;
        });
        $scope.$watch(() => { return self.books }, () => {
            if (self.books) {
                self.summary = {
                    totalBooks: self.books.length,
                    bestBook: _.reduce(self.books, (a, b) => { return (a.rating > b.rating ? a : b) }, self.books[0])
                }
            }
        }, true);
    }
}

var SummaryPage: angular.IComponentOptions = {
    templateUrl: 'src/templates/summary.html',
    controller: BookSummaryCtrl,
    controllerAs: 'ctrl'
}

export default SummaryPage;