import { Component, Input, Output } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
      <mat-card>
        <mat-card-header>
          <mat-card-subtitle>{{ product.brand }}</mat-card-subtitle>
          <mat-card-title>{{ product.product_name }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p class="max-h-16 truncate">{{ product.description }}</p>
          <mat-divider></mat-divider>
        </mat-card-content>
        <mat-card-actions>
          <button mat-stroked-button color="warn" (click)="delete.next(true)">Delete</button>
          <button mat-flat-button color="primary" (click)="router.navigate(['product/' + product.uniq_id])">View More</button>
        </mat-card-actions>
      </mat-card>
 `,
  styleUrls: []
})
export class ProductComponent {

  @Output() delete: Subject<any> = new Subject<boolean>();
  @Input() product!: ProductModel;


  constructor(protected router: Router) { 
    
  }
}
