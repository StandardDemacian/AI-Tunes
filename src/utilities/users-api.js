import { getToken } from "./users-service"
const BASE_URL = "/api/users"

export async function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)

}

export async function logIn(credentials) {
    return sendRequest(`${BASE_URL}/log-in`, 'POST', credentials)

}

export default async function sendRequest(url, method='GET', payload=null) {
    const options = { method }
    
    if(payload) {
        options.headers = { 'Content-Type': 'application/json'}
        options.body = JSON.stringify(payload)
    }
    const token = getToken()
    if(token) {
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`
    }
    const res = await fetch(url, options)
    console.log(url)
    if(res.ok) {
        console.log(res.json)
        return res.json()
    } else {
        throw new Error("Bad Request")
    }
}

export async function checkToken() {
    return sendRequest(BASE_URL + '/check-token')
}