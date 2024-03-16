import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";

const store = {
    cities: citiesReducer
} //store con lo que llega del reducer (su estado)

export default configureStore({
    reducer: store
})

//cada vez que se necesita otro estado en el store, se debe crear un reducer nuevo e importarlo y guardarlo en una prop