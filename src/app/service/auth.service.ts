import { Injectable } from '@angular/core';
import * as NotificationActions from '../store/notification/notification.action';
import { Router } from '@angular/router';
import { AppState } from '../store/reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthService {

    private userName: string | null = null;
    private password: string | null = null;

    constructor(private store: Store<AppState>,
        private router: Router) { }

    public hasAccess(): boolean {
        if (this.userName === 'admin@test.com' && this.password === 'admin') {

            localStorage.setItem('token', 'token');
            return true
        };

        if (localStorage.getItem('token')) return true;

        return false;
    }


    public handleLogout() {
        localStorage.removeItem('token');
        this.router.navigate(['']);
        this.store.dispatch(NotificationActions.displaySuccess({ title: 'Logout', description: 'Successfully'}))
    }

    public setUserName(userName: string) {
        this.userName = userName;
    }

    public setPassword(password: string) {
        this.password = password;
    }
}