import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductActions from './product.actions';
import { concatMap, map, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { ProductService } from "src/app/service/product.service";
import * as NotificationActions from '../notification/notification.action';
import { AppState } from "../reducers";
import { Store } from "@ngrx/store";


@Injectable()
export class ProductEffects {

    loadProduct$ = createEffect(() => this.actions$
        .pipe(
            ofType(ProductActions.loadAllProducts),
            concatMap(_action => this.productService.getProducts()),
            map(product => ProductActions.loadedAllProducts({ productList: product }))
        )
    )

    deleteProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActions.deleteProduct),
        tap(_ => this.store.dispatch(NotificationActions.displaySuccess({ title: 'File Deleted', description: 'successfully' }))),
        map(_ => ProductActions.updateCurrPage()),
    ))


    constructor(private actions$: Actions, private productService: ProductService, private store: Store<AppState>) { }
}
