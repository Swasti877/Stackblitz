import { Component } from '@angular/core';

@Component({
    selector: 'app-dialog',
    template: `
        <h1 mat-dialog-title>Delete file</h1>
        <div mat-dialog-content>
            Are you sure want to delete?
        </div>
        <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="false">No</button>
        <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
        </div>
  `,
    styleUrls: []
})
export class DialogComponent {


}
