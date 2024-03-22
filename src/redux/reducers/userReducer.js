import { createReducer } from "@reduxjs/toolkit";
import { signIn, signOut } from "../actions/userAction";

const initialState = {
    user: {},
}

const userReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(signIn, (state, action) => {
        return {...state, user: action.payload}
    })
    .addCase(signOut, () => {
        console.log(initialState);
        return initialState
    })
})

export default userReducer;
