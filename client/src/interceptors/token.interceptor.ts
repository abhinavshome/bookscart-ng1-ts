import * as angular from 'angular';

export default class TokenInterceptor implements angular.IHttpInterceptor {
    static $inject = ['$q', 'authService'];

    constructor(private $q: angular.IQService, private authService) {

    }

    request = (config: angular.IRequestConfig) : angular.IRequestConfig => {
        //write your code here
        var token = this.authService.getToken();
        if(token) {
            config.headers['x-access-token'] = token;
        }
        return config;
    }

}

export class TokenInterceptorConfig {
    constructor($httpProvider : angular.IHttpProvider) {
        $httpProvider.interceptors.push('tokenInterceptor');
    }
}