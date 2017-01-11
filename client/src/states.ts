import * as angular from 'angular';

export default class StateConfig {
    constructor($stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider) {
            var homeState : angular.ui.IState = {
                name: 'home',
                url: '/',
                template: '<home-page></home-page>'
            };

            var aboutState : angular.ui.IState = {
                name: 'about',
                url: '/about',
                template: '<about-page></about-page>'
            };

            var teamState : angular.ui.IState = {
                name: 'about.team',
                url: '/team',
                template: '<h3>Team</h3><ul><li>Mark</li><li>David</li></ul>'
            };

            var contactState : angular.ui.IState = {
                name: 'about.contact',
                url: '/contact',
                template: '<h3>Contact</h3>Write to us at hello@bookscart.com'
            };

            var summaryState : angular.ui.IState = {
                name: 'summary',
                url: '/summary',
                template: '<summary-page></summary-page>'
            };

            var addBookState : angular.ui.IState = {
                name: 'addBook',
                url: '/add-book',
                template: '<add-book-page></add-book-page>'
            };

            var bookDetailState : angular.ui.IState = {
                name: 'bookDetail',
                url: '/book/:id',
                template: '<book-detail-page></book-detail-page>'
            };

            var summaryDetailState : angular.ui.IState = {
                name: 'summary.detail',
                url: '/book/:id',
                template: '<book-detail-page></book-detail-page>'
            };

            var cartState : angular.ui.IState = {
                name: 'cart',
                url: '/cart',
                template: '<cart-page></cart-page>'
            };

            var notFoundState : angular.ui.IState = {
                name: 'notFound',
                template: '<h1>Oops! Page not found :(</h1>'
            };

            var sideProductsState : angular.ui.IState = {
                name: 'sideProducts',
                url: '/side-products',
                template: '<side-product-page></side-product-page>',
                data: {
                    accessRequired: true
                }
            };

            var loginState : angular.ui.IState = {
                name: 'login',
                url: '/login',
                template: '<login-page></login-page>'
            };

            var adminState : angular.ui.IState = {
                name: 'admin',
                url: '/admin',
                template: '<admin-page></admin-page>',
                data: {
                    accessRequired: true,
                    allowOnly: ['admin']
                }
            };

            $stateProvider
                .state(homeState)
                .state(aboutState)
                .state(summaryState)
                .state(addBookState)
                .state(cartState)
                .state(bookDetailState)
                .state(teamState)
                .state(contactState)
                .state(summaryDetailState)
                .state(notFoundState)
                .state(sideProductsState)
                .state(loginState)
                .state(adminState)
                ;

            $urlRouterProvider.otherwise('/');

    }
}