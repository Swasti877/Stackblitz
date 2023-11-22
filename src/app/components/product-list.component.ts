import { Component, Input, OnDestroy, Output } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Component({
  selector: 'app-product-list',
  template: `
  <mat-spinner *ngIf="loading$ | async"></mat-spinner>
  <div class="grid grid-cols-1 md:grid-cols-3 md:gap-2">
    <app-product *ngFor="let product of products$ | async, let i = index" [product]="product" (delete)="openDialog(product.uniq_id)"></app-product>
  </div>`,
  styleUrls: []
})
export class ProductListComponent implements OnDestroy {


  private ngUnsubscribe$: Subject<void> = new Subject<void>();

  @Input() loading$!: Observable<boolean>;
  @Input() products$!: Observable<ProductModel[]>;
  @Output() handleDelete: Subject<string> = new Subject<string>();

  constructor(public dialog: MatDialog) { }

  openDialog(id: string): void {
    const dialog$ = this.dialog.open(DialogComponent);

    dialog$.afterClosed()
      .pipe(
        takeUntil(this.ngUnsubscribe$)
      )
      .subscribe(res => {
        if (res) {
          this.handleDelete.next(id);
        }
      })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
