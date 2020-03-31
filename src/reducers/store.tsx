import {Reducer} from "redux";
import { ActionType } from "./types";
import { DispatchAction } from "./actions";
import CategoyModel from "../models/CategoryModel";
import TransactionModel from "../models/Transaction";

export interface InitialState {
    loading         : false
    count           : number,
    categories      : CategoyModel[],
    transactions    : TransactionModel[]
}
export const initialState: InitialState = {
    loading         : false,
    count           : 0,
    categories      : [],
    transactions    : []
};


export const RootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {

    if(action.type === ActionType.LoadCategories) {
        return {...state, categories: action.payload.categories || [] };
    }
    else if (action.type === ActionType.LoadTransactions){
        return {...state, transactions: action.payload.transactions || [] };
    }
    else if (action.type === ActionType.Add) {
        return {...state, count: (state.count +1) || 0 };
    } else if (action.type === ActionType.Less) {
        return {...state, count: (state.count -1)};
    } else if (action.type === ActionType.Reset) {
        return {...state, count: 0};
    } else return state;
};
