import {axios, UserUID} from '../config/config'

import { AlertWarning} from './Alerts'
import NewTransactionModel from "../models/NewTransactionModel"


export function AddNewTransactionService(model : NewTransactionModel) {


    model.UserUID = UserUID()

    return axios.post('addTransaction', model)
   
    
    
}

export function GetTransactionsByUser()
{
    var userUID = UserUID()

    return axios.get('getTransactionsByUser/'+ userUID)   
}

export function remove_transaction(id : number)
{
    var useruid = UserUID()

   return axios.get("/removeTransaction/"+id+"/"+useruid)

}

export function ValidateNewTransactionData(model : NewTransactionModel) : boolean
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