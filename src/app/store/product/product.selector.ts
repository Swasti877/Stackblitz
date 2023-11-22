import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import { ProductState } from "./product.reducers";

// selectors
export const selectAppState = (state: AppState) => state.productReducer;


// product selector
export const selectProducts = createSelector(
    selectAppState,
    (state: ProductState) => Object.values(state.entities),
)


// loading selector
export const selectProductLoading = createSelector(
    selectAppState,
    (state: ProductState) => state.loading,
)


// loaded Selector
export const selectProductLoaded = createSelector(
    selectAppState,
    (state: ProductState) => state.loaded,
)


export const selectProductLength = createSelector(
    selectAppState,
    (state: ProductState) => state.length,
)

export const selectProductPageIndex = createSelector(
    selectAppState,
    (state: ProductState) => state.pageIndex,
)


export const selectProductPageSize = createSelector(
    selectAppState,
    (state: ProductState) => state.pageSize,
)


export const selectProductPreviousPageIndex = createSelector(
    selectAppState,
    (state: ProductState) => state.previousPageIndex,
)


export const selectProductCurrPageProduct = createSelector(
    selectAppState,
    (state: ProductState) => state.currPageProducts,
)