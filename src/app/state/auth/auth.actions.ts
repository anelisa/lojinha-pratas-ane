import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/authentication/interfaces/user";

export const login = createAction (
  '[Login] Login',
  props<{email: string}>()
)

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  props<{token: string}>()
)
