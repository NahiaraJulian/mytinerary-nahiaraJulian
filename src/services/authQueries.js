import axios from "axios"

const register = async(data) => {
    try {
        const resp = await axios.post('http://localhost:4000/api/auth/register', data)
        return resp.data
    } catch (error) {
        return error.response.data
    }
}

const login = async(data) => {
    try {
        const resp = await axios.post('http://localhost:4000/api/auth/login', data)
        localStorage.setItem("token", resp.data.data.token);
        return resp.data
    } catch (error) {
        return error.response.data
    }
}

const loginToken = async() => {
    try {
        const token = localStorage.getItem("token")
        const resp = await axios.post('http://localhost:4000/api/auth/token', {}, {
            headers: {Authorization: `Bearer ${token} `}
        })
        return resp.data
    } catch (error) {
        console.log(error);
        return error
    }
}

export default {register, login, loginToken};

/*
POST - http://localhost:4000/api/auth/register
POST - http://localhost:4000/api/auth/login
POST - http://localhost:4000/api//auth/token
PUT - http://localhost:4000/api/users/wishlist/:idItinerary
Registro http://localhost:4000/api//auth/register 

first_name
last_name
email
password
country
image ( opcional )
description ( opcional )
Login http://localhost:4000/api/auth/login

email
password
Login con token http://localhost:4000/api/auth/token

Mandar el token por los headers de la peticion mediante Bearer Token
Toogle wishlist http://localhost:4000/api/users/wishlist/:idItinerary

Mandar el token por los headers de la peticion mediante Bearer Token
reemplazar iditinerary por el id del itinerario al que quiero agregar/quitar de la wishlist
 */