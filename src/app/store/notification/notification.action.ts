import { createAction, props } from "@ngrx/store";

export const displaySuccess = createAction(
    "[Snackbar Notification] Display Success",
    props<{ title: string, description: string }>()
)