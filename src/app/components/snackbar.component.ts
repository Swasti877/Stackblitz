import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar',
    template: `
    <div class="flex items-center">
        <h3>{{ data.title }}</h3>
        <p class="pl-2">{{ data.description }}</p>
    </div>
  `,
    styleUrls: []
})
export class SnackbarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { title: string, description: string }) { }
}
