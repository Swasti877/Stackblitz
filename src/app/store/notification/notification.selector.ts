import { AppState } from "../reducers";

export const selectNotificationState = (state: AppState) => state.notificationReducer;

