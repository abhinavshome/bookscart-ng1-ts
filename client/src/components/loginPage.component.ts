import {User} from '../interfaces';

class LoginCtrl {
    user: User;
    constructor(private $http: angular.IHttpService, private $state: angular.ui.IStateService,
    private authService, private alertService) {

    }

    login() {
        this.$http.post('http://localhost:4000/login', this.user).then((res : any) => {
            this.authService.setToken(res.data.token);
            this.authService.setCurrentUser(res.data.user);
            this.alertService.success('Logged in successfully');
            this.$state.go('home');
        }, (res: any) => {
            if(res.status == 401)
                this.alertService.error('Incorrect credentials');
        });
    }
}

var LoginPage : angular.IComponentOptions = {
    templateUrl: 'src/templates/login.html',
    controller: LoginCtrl,
    controllerAs: 'ctrl'
};

export default LoginPage;