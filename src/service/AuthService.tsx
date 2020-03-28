
import {AlertError, AlertWarning} from '../service/Alerts'

import Firebase from '../config/firebaseConfig'
import {Axios} from '../config/config'


import SignUpModel from '../models/SignUpModel'
import SignInModel from '../models/SignInModel'


export function SignUp(model: SignUpModel){

    if (!ValidateSignUpModel(model))
        return

    Firebase.auth()
        .createUserWithEmailAndPassword(model.email, model.password)
        .then((resp) => {
            if(resp.user)
            {
                var token : loginResponModel =  {  user : resp.user  }
                model.uid = token.user.uid;
                RegisterUser(model)
                localStorage.setItem("token", token.user.xa)
                window.location.reload()
            }
        })
        .catch(error => {
            console.log(error)
            AlertError( error.message || "Something went wrong")
        })  
}

export function SignIn(model : SignInModel) {

    if (!ValidatedSignInModel(model))
        return

    Firebase.auth()
        .signInWithEmailAndPassword(model.email, model.password)
        .then((resp) => {
            if(resp.user)
            {
                var token : loginResponModel =  {  user : resp.user  }
                localStorage.setItem("token", token.user.xa)
                window.location.reload()
            }
        })
        .catch(error => {
            console.log(error)
            AlertError( error.message || "Something went wrong")
        })  
}

export function LogOut()
{
    localStorage.removeItem("token")
    window.location.reload();
}

function RegisterUser(model : SignUpModel){

    console.log(model);

    Axios.post("/addUser", model)
    .then((res)=> {
      console.log(res.data);
    })
    .catch((err)=> {
      console.log(err);
    })
}

function ValidatedSignInModel(model : SignInModel) :boolean {
    if(!model.email)
    {
        AlertWarning("You need an email to continue")
        return false;   
    }

    if(!model.password)
    {
        AlertWarning("Please type your password")
        return false;   
    }


    return true;
}

function ValidateSignUpModel(model: SignUpModel) : boolean
{
    if(!model.email)
    {
        AlertWarning("You need an email to continue")
        return false;   
    }
    
    if(!model.firstName)
    {
        AlertWarning("Please type your firstname")
        return false;   
    }
   
    if(!model.lastaName)
    {
        AlertWarning("Please type your lastname")
        return false;   
    }
    
    if(!model.password)
    {
        AlertWarning("Please type your password")
        return false;   
    }

    if(model.password !== model.confirmPassword)
    {
        AlertWarning("Password doesn't match")
        return false;   
    }

    return true;
}

interface loginResponModel {
    user : any
}

export function IsLoggIn(): boolean
{
    var token = localStorage.getItem("token")

    if(token)
        return true;
    else 
        return false;
}