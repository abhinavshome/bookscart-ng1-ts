import {User} from '../interfaces';

export default class AuthService {
    authData : any = {};

    constructor() {
        this.authData = JSON.parse(localStorage.getItem('authData')) || {};
    }

    isLoggedIn() {
        return !!this.authData.token;
    }

    setToken(token: string) {
        this.authData.token = token;
        this.saveAuthData();
    }

    getToken() : string {
        return this.authData.token;
    }

    setCurrentUser(user: User) {
        this.authData.currentUser = user;
        this.saveAuthData();
    }

    getCurrentUser() : User {
        return this.authData.currentUser;
    }

    saveAuthData() {
        localStorage.setItem('authData', JSON.stringify(this.authData));
    }

    logout() {
        localStorage.removeItem('authData');
        this.authData.token = null;
        this.authData.currentUser = null;
    }
}