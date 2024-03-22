import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import userReducer from "./reducers/userReducer";

const store = {
    cities: citiesReducer,
    user: userReducer
} //store con lo que llega del reducer (su estado)

export default configureStore({
    reducer: store
})

//cada vez que se necesita otro estado en el store, se debe crear una nueva propiedad
//al reducer e importarlo y guardarlo en una prop