import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "../components/snackbar.component";


@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    constructor(private snackbar: MatSnackBar) { }

    openSnackbar(obj: { title: string, description: string }) {
        this.snackbar.openFromComponent(SnackbarComponent, {
            duration: 3000,
            data: obj,
        })
    }
}
