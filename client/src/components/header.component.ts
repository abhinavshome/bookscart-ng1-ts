import * as angular from 'angular';

class HeaderCtrl {
    authData: any;
    alert: any;

    constructor(private $state: angular.ui.IStateService, $scope: angular.IScope, private authService, private alertService) {
        console.log('header ctrl');
        this.authData = this.authService.authData;
        this.alert = this.alertService.message;
    }

    logout() {
        this.authService.logout();
        this.alertService.success('Logged out successfully!');
        this.$state.go('login');
    }

    hideAlert() {
        this.alertService.hide();
    }
}

var Header : angular.IComponentOptions = {
    templateUrl: 'src/templates/header.html',
    controller: HeaderCtrl,
    controllerAs: 'hCtrl'
};

export default Header;