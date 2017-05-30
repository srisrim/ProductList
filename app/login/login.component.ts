import { Component } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
    selector: '<login></login>',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent {
    title: string = 'Login';
    login: boolean = false;

    userName: string;
    password: string;

    hide() {
        this.login = false;
    }
    show() {
        this.login = true;
    }
    
    logInFn() {
        debugger;
        if (this.userName === 'srisrim' && this.password === 'qazplm123') {
            this.show();
        }
        else {
            this.hide();
        }
    }
    

}