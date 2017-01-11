import * as angular from 'angular';

export default class LoggingInterceptor implements angular.IHttpInterceptor {
    static $inject = ['$q'];

    constructor(private $q: angular.IQService) {

    }

    request(config: angular.IRequestConfig) : angular.IRequestConfig{
        //write your code here
        //console.log('REQUEST:: ', config);
        //config.headers['X-Access-Token'] = 'token-from-interceptor';
        
        return config;
    }

    response(response: angular.IHttpPromiseCallbackArg<any>) {
        //write your code here
        //console.log('RESPONSE:: ', response);
        // you can do things like these
        // if(response.data && response.data.push) {
        //     response.data.push({
        //         title: 'Dummy book',
        //         author: 'dummy author',
        //         price: 10,
        //         rating: 3
        //     });
        // }

        return response;
    }

}

export class LoggingInterceptorConfig {
    constructor($httpProvider : angular.IHttpProvider) {
        $httpProvider.interceptors.push('loggingInterceptor');
    }
}