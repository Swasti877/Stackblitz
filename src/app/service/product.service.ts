import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Observable, catchError, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import * as NotificationsActions from '../store/notification/notification.action';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private readonly url = './assets/productList.json';

  
  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }


  public getProducts(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.url)
      .pipe(
        catchError(err => {
          console.log('Line 22 >> ', err.error.isTrusted)
          tap(_ => this.store.dispatch(NotificationsActions.displaySuccess({ title: 'Something went wrong', description: 'Error occured!' })))
          return of([])
        })
      )
  }

}
