import { getToken } from "./users-service"

export default async function sendRequest(url, method="GET", payload=null) {
    const options = { method }
    if (payload){
        options.headers = { "Content-Type": "application/json" }
        options.body = JSON.stringify(payload)
    }
    //if there is a token inlucucde it in request
    const token = getToken()
    if(token) {
        //make sure we have headers on our options
        options.headers = options.headers || {}
        //add in our token with an authorization header
        options.headers.Authorization = `Bearer ${token}`
        //make sure you capitalize Authorization
        //best practice is to begin with "Bearer "
    }
    const res = await fetch(url, options)
    if(res.ok) {
        return res.json()
    } else  {
        //console.log(res.error)
        throw new Error("Bad Request")
    }
}
