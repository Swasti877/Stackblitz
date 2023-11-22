import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'app-navbar',
    template: `
        <mat-toolbar>
            <button mat-raised-button routerLink="/product">Product</button>
            <button mat-raised-button [routerLink]="'form'" >Page</button>
            <button mat-raised-button (click)="authService.handleLogout()">Logout</button>
        </mat-toolbar>
  `,
    styleUrls: []
})
export class NavbarComponent {

    protected options: string[] = []
    constructor(protected authService: AuthService) { }
}
