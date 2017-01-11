import * as angular from 'angular';
import * as _ from 'lodash';

export default class OnAppStart {
    constructor($rootScope : angular.IRootScopeService, 
        $state: angular.ui.IStateService, 
        authService, 
        alertService) {
        $rootScope.$on('$stateChangeStart', (e, nextState) => {
            var isLoggedIn = authService.isLoggedIn();
            var isAllowed = true;
            if(nextState.data && nextState.data.allowOnly && isLoggedIn)
                isAllowed = _.includes(nextState.data.allowOnly, authService.getCurrentUser().role);
            var isLoginProtected = nextState.data && nextState.data.accessRequired; 
            if( isLoggedIn && !isAllowed) {
                e.preventDefault();
                alertService.error('You are not authorized to view this page!');
                $state.go('login');
            } else if( isLoginProtected && !isLoggedIn ) {
                e.preventDefault();
                alertService.error('You need to login to see this page!');
                $state.go('login');
            }
        });
    }
}