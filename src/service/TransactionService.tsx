import {axios, UserUID} from '../config/config'

import { AlertWarning, AlertSuccess, AlertError} from './Alerts'
import NewTransactionModel from "../models/NewTransactionModel"


export function AddNewTransactionService(model : NewTransactionModel) {

    if(!ValidateNewTransactionData(model))
        return 

    model.UserUID = UserUID()

    return axios.post('addTransaction', model)
    .then((res) => {
        AlertSuccess('Added succefully')
        return true
    }).catch((err) => {
        console.log(err);
        AlertError('Something went wrong')
        return  false
    });
    
    
}

export function GetTransactionsByUser()
{

    var userUID = UserUID()

    return axios.get('getTransactionsByUser/'+ userUID)
    
}

function ValidateNewTransactionData(model : NewTransactionModel) : boolean
{
    if(!model.CategoryId ||  Number(model.CategoryId) ===0 )
    {
        AlertWarning("You must select a category")
        return false
    }

    if(! (model.Amount > 0))
    {
        AlertWarning("Amount shoul be greater than 0")
        return false
    }


    return true

}