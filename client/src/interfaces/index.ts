import * as angular from 'angular';

export interface Book {
    id?: number;
    title: string;
    author: string;
    price: number;
    rating: number;
}

export interface Item {
    name: string;
    qty: number;
    price: number;
}

export interface Cart {
    items: Item[];
    totalPrice: number;
}

export interface User {
    username: string;
    password: string;
    role? : string;
}

export interface IBookService {
    getBooks() : angular.IHttpPromise<any>;
    rateUp(Book): angular.IHttpPromise<any>;
    rateDown(Book): angular.IHttpPromise<any>;
    addBook(Book): angular.IHttpPromise<any>;
    getBook(number) : angular.IHttpPromise<any>;
    deleteBook(Book) : angular.IHttpPromise<any>;
}

export interface ICartService {
    getCart() : Cart;
    addToCart(string, number);
}

export interface IBookCtrlScope extends angular.IScope {
    addBookForm: angular.IFormController;
}

export interface SideProduct {
    id: number;
    name: string;
    price: number;
}
