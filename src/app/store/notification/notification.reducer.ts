import { createReducer, on } from "@ngrx/store"


export interface NotificationState {
    noti: string,
}


const initialState: NotificationState = {
    noti: 'add property here.!!',
}


export const notificationReducer = createReducer(
    initialState,
    on(state => state),
)