import { createAction } from "@reduxjs/toolkit";

const signIn = createAction("signIn", (data) => {
    return {
        payload: data
    }
})

const signOut = createAction("signOut", () => {
    localStorage.removeItem("token")
    return {
        payload: {}
    }
})

export {signIn, signOut};