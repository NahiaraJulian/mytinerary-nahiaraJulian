import { createReducer } from "@reduxjs/toolkit";
import {filterByName, load} from "../actions/citiesActions"

//se crea el estado inicial
const initialState = {
    all: [],
    filteredCities: [],
}

//createReducer le puede crear propiedades a la copia del estado inicial cuando se detecta el caso
//los casos son los que reaccionan a las acciones. El componente despacha una acción(action) la cual matchea con un reducer y este modifica/actualiza el store

const citiesReducer = createReducer(initialState, (builder) => {
    builder.addCase(load, (state, action) => { //cuando sea despachada (el componente ejecuta) la accion load, el reducer "se entera" y ejecuta la fn
        return {
            ...state, //copiar el estado del store y añadirle o cambiar el valor de una propiedad, se necesita una accion para que devuelva lo del return
            all: action.payload,
            filteredCities: action.payload
        }
    }).addCase(filterByName, (state, action) => { //filtar dentro de addCase
        const aux = state.all.filter((city) => city.name.toLowerCase().startsWith(action.payload.toLowerCase().trim()));
        return {
            ...state,
            filteredCities: aux
        }
    })
})

export default citiesReducer; //exportarlo e importarlo en el store