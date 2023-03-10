import * as userAPI from "./users-api"

    //waiting to get userData from SignUpForm
export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)

    // for right now, thos won't be a token but we will be 
    // returning one eventually
    localStorage.setItem('token', token)
    return getUser()
}

export function getToken() {
    // get token from local storaghe
    //get tokens payload
    //check if the token has expired
    //if it hasnt return the token
    const token = localStorage.getItem("token")
    if (!token) return null
    //JWT token broken into 3 parts at '.'
        //1- is the header
        //2- is the payload
        //3- is the signature
    //split the string at the period and grab the second array element
    const payload = token.split(".")[1]
    //JWT's are base64 encoded
    //we need to decode it to make it usable
    //JavaScript has a built in function for decoding base64 called:  atob()
    const decodedPayload = atob(payload)
    const parsedPayload = JSON.parse(decodedPayload)
    //JWTs exp is expressed in seconds not miliseconds so convert
    if(parsedPayload.exp < Date.now() / 1000){
        //token has expired    remove it
        localStorage.removeItem("token")
        return null
    } else {
        return token
    }
}

export function getUser() {
        //use above function to obtain token
    const token = getToken()
    if (token) {
        const payload = token.split(".")[1]
        const decodedPayload = atob(payload)
        const parsedPayload = JSON.parse(decodedPayload)
        return parsedPayload.user
    } else {
        return null
    }
    //return token ? JSON.parse(atob(token.split('.')[1])).user : null;
        //this will do the above if else in one line
}

export function logOut() {
    localStorage.removeItem("token")
}

export async function logIn(credentials) {
    const token = await usersAPI.logIn(credentials)
    localStorage.setItem('token', token)
    return getUser()
}

export function checkToken() {
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr))
}