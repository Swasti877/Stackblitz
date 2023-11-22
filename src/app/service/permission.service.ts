import { Injectable, inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import { AppState } from '../store/reducers';
import { Store } from '@ngrx/store';
import * as NotificationActions from '../store/notification/notification.action';


@Injectable()
export class PermissionService {

    constructor(private authService: AuthService,
        private store: Store<AppState>,
        private router: Router) { }

    canActivate(): boolean {

        if (this.authService.hasAccess()) {
            return true;
        }

        // this.snackBarService.openSnackbar({ title: 'Invalid Error', description: 'Invalid User Name' })
        this.store.dispatch(NotificationActions.displaySuccess({ title: 'Invalid Error', description: 'Invalid User Name' }))
        this.router.navigate(['']);
        return false;
    }
}

export const authActivate: CanActivateFn = (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    return inject(PermissionService).canActivate();
}