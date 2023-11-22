import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as NotificationActions from './notification.action';
import { tap } from "rxjs";
import { SnackbarService } from "src/app/service/snackbar.service";


@Injectable()
export class NotificationEffect {

    loadSuccessMsg$ = createEffect(() => {
        return this.action$
            .pipe(
                ofType(NotificationActions.displaySuccess),
                tap(action => {
                    const { title, description } = action;
                    this.snackbarService.openSnackbar({ title, description })
                }),

            )
    },
    {dispatch: false})


    constructor(private action$: Actions, private snackbarService: SnackbarService) { }
}