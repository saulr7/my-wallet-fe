import axios from 'axios'

var baseULR = ""

if (process.env.NODE_ENV === "production"){
    baseULR = "https://aqueous-sierra-62258.herokuapp.com"
}

else if (process.env.NODE_ENV === "test"){
    baseULR = "http://localhost:8000"
}

else {
    baseULR = "http://localhost:8000"
}

// baseULR = "https://aqueous-sierra-62258.herokuapp.com"

axios.defaults.baseURL = baseULR;
axios.defaults.headers.common['Authorization'] = `Bearer ${Token()}`
axios.defaults.headers.common['Accept'] = `*/*`

function JwtPayload() {


    var token = localStorage.getItem("token")

    if (!token) {
        window.location.href = "/";
        return;
    }

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    if (!jsonPayload)
        return ""

    return JSON.parse(jsonPayload);
};


function Token() {
    var token = localStorage.getItem("token")

    if (!token || token == null) {
        localStorage.removeItem("token")
        return "";
    }

    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var payload = JSON.parse(atob(base64));

    var jwt = payload;

    var horaActual = new Date().getTime() / 1000;

    if (horaActual > jwt.exp) {
        localStorage.removeItem("token")
        window.location.reload();
        return ""
    }
    
    return token
}

function UserUID() : string
{
    var payload = JwtPayload()

    if(!payload)
        return ""
    
    return payload.user_id

}

export {  axios, Token, JwtPayload , UserUID}