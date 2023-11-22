import { createAction, props } from "@ngrx/store";
import { PaginationChangeObj } from "src/app/models/paginationChangeObj.model";
import { ProductModel } from "src/app/models/product.model";


export const loadAllProducts = createAction('[Task] Load All Products');

export const loadedAllProducts = createAction('[Task] Loaded All Products', props<{ productList: ProductModel[] }>());

export const addProduct = createAction('[Task] Add Product', props<{ product: ProductModel }>());

export const editProduct = createAction('[Task] Edit Product', props<{ id: string, product: ProductModel }>());

export const deleteProduct = createAction('[Task] Delete Product', props<{ id: string }>());

export const findProduct = createAction('[Task] Find Product', props<{ id: string }>());

export const pageChange = createAction('[Pagination] Page Changed', props<{ propertyChange: PaginationChangeObj }>());

export const updateCurrPage = createAction('[Pagination] Update Current Page');