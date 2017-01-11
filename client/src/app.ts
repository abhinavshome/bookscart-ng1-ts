import * as angular from 'angular';
import 'angular-ui-router';

import Header from './components/header.component';
import HomePage from './components/homePage.component';
import AboutPage from './components/aboutPage.component';
import SummaryPage from './components/summaryPage.component';
import AddBookPage from './components/addBookPage.component';
import BookDetailPage from './components/bookDetailPage.component';
import CartPage from './components/cartPage.component';
import SideProductPage from './components/sideProductPage.component';
import LoginPage from './components/loginPage.component';
import AdminPage from './components/adminPage.component';
import BookService from './services/book.service';
import CartService from './services/cart.service';
import AuthService from './services/auth.service';
import AlertService from './services/alert.service';
import titlecase from './filters/titlecase';
import StateConfig from './states';
import StarWidget from './components/star.component';
import RatingBarWidget from './components/ratingbar.component';
import TokenInterceptor, { TokenInterceptorConfig } from './interceptors/token.interceptor';
import OnAppStart from './onAppStart';


angular
    .module('demoApp', ['ui.router'])
    .run(OnAppStart)
    .config(StateConfig)
    .config(TokenInterceptorConfig)
    .component('header', Header)
    .component('homePage', HomePage)
    .component('aboutPage', AboutPage)
    .component('summaryPage', SummaryPage)
    .component('addBookPage', AddBookPage)
    .component('cartPage', CartPage)
    .component('bookDetailPage', BookDetailPage)
    .component('sideProductPage', SideProductPage)
    .component('loginPage', LoginPage)
    .component('adminPage', AdminPage)
    .service('bookService', BookService)
    .service('cartService', CartService)
    .service('tokenInterceptor', TokenInterceptor)
    .service('authService', AuthService)
    .service('alertService', AlertService)
    .filter('titlecase', titlecase)
    .component('starWidget', StarWidget)
    .component('ratingBarWidget', RatingBarWidget)
    ;



