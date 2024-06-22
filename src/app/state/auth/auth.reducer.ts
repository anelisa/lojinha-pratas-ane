import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/core/authentication/interfaces/user";
import { login, loginSuccess } from "./auth.actions";

export type StateAuth = {
  user: any | null
  error: string | null
}

export const initialState: StateAuth = {
  user: null,
  error: null
}



export const authReducer = createReducer(
  initialState,
  on(login, (state: StateAuth, user: any): StateAuth => {
    return {
      ...state,
      user: user
    }
  }),
  on(loginSuccess, (state, {token}) => ({
    ...state,
    token,
    error: null
  }))
)
