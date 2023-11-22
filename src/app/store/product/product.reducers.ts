import { createReducer, on } from "@ngrx/store";
import * as ProductActions from './product.actions';
import { ProductModel } from "src/app/models/product.model";
import { calculateStartAndEndPagination } from "src/app/utils/calculateStartAndEndPagination";
import { EntityState, createEntityAdapter } from "@ngrx/entity";


const productAdapter = createEntityAdapter<ProductModel>({
    selectId: (product: ProductModel) => product.uniq_id,
});

export interface ProductState extends EntityState<ProductModel> {

    currPageProducts: ProductModel[],
    loaded: boolean,
    loading: boolean,

    // for pagination
    length: number,
    pageIndex: number,
    pageSize: number,
    previousPageIndex: number,
}

const initialProductState: ProductState = productAdapter.getInitialState({

    currPageProducts: [],
    loaded: false,
    loading: false,
    length: 0,
    pageIndex: 0,
    pageSize: 5,
    previousPageIndex: 0,
})


export const productReducer = createReducer(
    initialProductState,
    on(ProductActions.addProduct, (state, action) => {
        return productAdapter.addOne(action.product, state);
    }),
    on(ProductActions.editProduct, (state, action) => {
        return productAdapter.updateOne({
            id: action.id,
            changes: action.product,
        }, state)
    }),
    on(ProductActions.deleteProduct, (state, action) => {
        return productAdapter.removeOne(action.id, state)
    }),
    on(ProductActions.loadedAllProducts, (state, action) => {

        const { start, end } = calculateStartAndEndPagination(state.pageIndex, state.pageSize);
        return productAdapter.setAll(action.productList, {
            ...state,
            currPageProducts: action.productList.slice(start, end),
            loading: false,
            loaded: true,
            length: action.productList.length,
        })
    }),
    on(ProductActions.loadAllProducts, (state, _action) => {
        return {
            ...state,
            loading: true,
        }
    }),
    on(ProductActions.pageChange, (state, action) => {
        const { pageIndex, pageSize } = action.propertyChange,
            { start, end } = calculateStartAndEndPagination(pageIndex, pageSize);

        return {
            ...state,
            ...action.propertyChange,
            currPageProducts: Object.values(state.entities).slice(start, end) as ProductModel[],
        }
    }),
    on(ProductActions.updateCurrPage, (state, _action) => {
        const { start, end } = calculateStartAndEndPagination(state.pageIndex, state.pageSize);
        const productArr = (Object.values(state.entities) as unknown) as ProductModel[];
        return {
            ...state,
            currPageProducts: productArr.slice(start, end),
            length: productArr.length,
        }
    })
)