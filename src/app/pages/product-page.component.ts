import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { ProductModel } from '../models/product.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
    selectProductCurrPageProduct,
    selectProductLength,
    selectProductLoaded,
    selectProductLoading,
    selectProductPageIndex,
    selectProductPageSize
} from '../store/product/product.selector';
import { PaginationChangeObj } from '../models/paginationChangeObj.model';
import * as ProductActions from '../store/product/product.actions';


@Component({
    selector: 'app-product-page',
    template: `
        <app-product-list [products$]="products$" [loading$]="loading$" (handleDelete)="handleDelete($event)"></app-product-list>
        <mat-paginator #paginator
               class="demo-paginator"
               (page)="handlePageEvent($event)"
               [length]="length$ | async"
               [pageSize]="pageSize$ | async"
               [showFirstLastButtons]="true"
               [pageSizeOptions]="pageSizeOptions"
               [pageIndex]="pageIndex$ | async"
               [disabled]="loading$ | async"
               aria-label="Select page">
            </mat-paginator>
    `,
    styleUrls: []
})


export class ProductPageComponent implements OnInit {
    protected pageSizeOptions: number[] = [5, 10, 15];
    protected products$: Observable<ProductModel[]> = this.store.select(selectProductCurrPageProduct);
    protected loading$: Observable<boolean> = this.store.select(selectProductLoading);
    protected length$: Observable<number> = this.store.select(selectProductLength);
    protected pageSize$: Observable<number> = this.store.select(selectProductPageSize);
    protected pageIndex$: Observable<number> = this.store.select(selectProductPageIndex);
    private ngUnsubscribe$: Subject<boolean> = new Subject<boolean>();

    protected handlePageEvent(event: any) {
        const pageinationObj: PaginationChangeObj = event as PaginationChangeObj;
        this.store.dispatch(ProductActions.pageChange({ propertyChange: pageinationObj }));
    }

    protected handleDelete = (id: string) => {
        this.store.dispatch(ProductActions.deleteProduct({ id }));
    }

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        // dipatch action to load product when app start's
        this.store.select(selectProductLoaded)
            .pipe(
                takeUntil(this.ngUnsubscribe$)
            )
            .subscribe(loaded => {
                if (!loaded) {
                    this.store.dispatch(ProductActions.loadAllProducts())
                }
            })

        // TODO: Remove
        this.store.subscribe(res => {
            console.log('Store values ', res)
        })
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next(true);
        this.ngUnsubscribe$.complete();
      }
}
