import { Component } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    template: `
    <app-navbar></app-navbar>
      <div class="h-1/2 flex flex-col justify-end items-center">
        <h1>404</h1>
        <p>Page Not found!</p> 
      </div>
  `,
    styleUrls: []
})
export class PageNotFoundComponent {

}
