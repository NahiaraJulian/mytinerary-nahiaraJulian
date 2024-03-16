import { createAction } from "@reduxjs/toolkit";

//crear la accion que agrega las ciudades. Exportarla para poder usarla en el componente, para despacharla, y en el reducer
export const load = createAction('loadCities', (cities) => { //la accion recibe las ciudades y las pasa al reducer para que los reciba y devuelva el nuevo estado
    return {
        payload: cities
    }
}) //devuelve un objeto

//accion que filtre
export const filterByName = createAction('filterByName', (value) => {
    return {
        payload: value
    }
})