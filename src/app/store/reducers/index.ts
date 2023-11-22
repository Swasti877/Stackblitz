import { ActionReducerMap } from "@ngrx/store";
import { ProductState, productReducer } from "../product/product.reducers";
import { NotificationState, notificationReducer } from "../notification/notification.reducer";

export interface AppState {
    productReducer: ProductState,
    notificationReducer: NotificationState,
}

export const reducers: ActionReducerMap<AppState> = {
    productReducer,
    notificationReducer,
}