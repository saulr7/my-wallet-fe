import { Dispatch } from "react";
import { Action } from "redux";
import { ActionType } from "./types";
import { InitialState } from "./store";
import CategoyModel from "../models/CategoryModel";
import TransactionModel from "../models/Transaction";

export interface DispatchAction extends Action {
    payload: Partial<InitialState>;
}


export class RootDispatcher {
    
    private readonly dispatch: Dispatch<DispatchAction>;
    
    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch; 
    }
    LoadCategories = (categories: CategoyModel[]) => this.dispatch({type: ActionType.LoadCategories, payload: {categories}});
    
    LoadTransactions = (transactions: TransactionModel[]) => this.dispatch({type: ActionType.LoadTransactions, payload: {transactions}});

    Add = (count: number) => this.dispatch({type: ActionType.Add, payload: {count}});
    
    Less = (count: number) => this.dispatch({type: ActionType.Less, payload: {count}});
    
    Reset = () => this.dispatch({type: ActionType.Reset, payload: {}});
    
}