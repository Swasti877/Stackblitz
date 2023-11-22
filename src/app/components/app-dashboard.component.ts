import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
    styleUrls: []
})
export class DashbaordComponent {
    

}