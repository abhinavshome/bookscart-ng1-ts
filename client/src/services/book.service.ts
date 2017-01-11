import { Book, IBookService } from '../interfaces';
import * as _ from 'lodash';

export default class BookService implements IBookService {
    private url = 'http://localhost:4000/book/';
    private sideProductsUrl = 'http://localhost:4000/api/v1/products';

    constructor(private $http: angular.IHttpService) {

    }

    getBooks(): angular.IHttpPromise<any> {
        return this.$http.get(this.url);
    }

    getBook(id: number): angular.IHttpPromise<any> {
        return this.$http.get(this.url + id);
    }

    addBook(book: Book): angular.IHttpPromise<any> {
        return this.$http.post(this.url, book);
    }

    rateUp(book: Book): angular.IHttpPromise<any> {
        book.rating++;
        return this.$http.put(this.url + book.id, book);
    }

    rateDown(book: Book): angular.IHttpPromise<any> {
        book.rating--;
        return this.$http.put(this.url + book.id, book);
    }

    getSideProducts(): angular.IHttpPromise<any> {
        return this.$http.get(this.sideProductsUrl);
    }

    deleteBook(book: Book): angular.IHttpPromise<any> {
        return this.$http.delete(this.url + book.id);
    }
}
