import React , {useState, useEffect} from 'react'
import { GetTransactionsByUser, remove_transaction } from '../../../service/TransactionService'
import { AlertError, AlertSuccess } from '../../../service/Alerts';
import TransactionModel from '../../../models/Transaction';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import NoData from '../../common/NoData';
import Loading from '../../common/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatcher } from '../../../reducers/actions';
import { InitialState } from '../../../reducers/store';

interface StateProps {
    transactions : TransactionModel[],
    loading      : boolean
}

const Transactions :  React.FC<{}> = () => {

    const [loading, setLoading] = useState(false);

    var {transactions} = useSelector<InitialState, StateProps>((state: InitialState) => {
        return {
            transactions : state.transactions,
            loading       : state.loading
            
        }
    });


    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);

 
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //       transactions : [],
    //       startDate : new Date(),
    //       loading   : false
    //     }
    // }


    useEffect(() => {

        GetTransactions()

    }, [])



    function GetTransactions () {
        rootDispatcher.LoadTransactions([])
        setLoading(true)
        GetTransactionsByUser()
        .then((res) => {
            setLoading(false)
            if (!res.data)
                return
            var data = res.data

            var transactions : TransactionModel[] = data.data
            
            rootDispatcher.LoadTransactions(transactions)

        }).catch((err) => {
            setLoading(false)
            AlertError('Something went wrong')
        });
    }



    function removeTransaction (id) {

        setLoading(true)
        remove_transaction(id)
        .then((res) => {
            setLoading(false)
            GetTransactions()
            AlertSuccess("Category removed")
        }).catch((err) => {
            setLoading(false)
            console.log(err);
            AlertError("Something went wrong")
        });
    }



        return (
            <div>
                <h2 className="font-weight-bold">
                    Transactions
                </h2>

                <div className="row">
                    <div className="col text-center">
                        <Loading Loading={loading}/>
                    </div>
                </div>




                <div className="row">

                    <div className="col text-center">
                        <NoData noData={transactions.length ===0} Message="Add new expenses" ></NoData>
                    </div>
                </div>



                <table className={"table  bg-white " + (transactions.length ===0 ? "d-none" : "")}>
                    <thead className="thead-dark">
                        <tr>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            transactions.map((transaction, index)=> {
                                return (
                                    <tr key={index}>
                                        <td >{transaction.Category}</td>
                                        <td>{transaction.CreatedAtDate}</td>
                                        <td>{ transaction.Amount.toFixed(2)}</td>
                                        <td>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={()=> removeTransaction(transaction.Id)}>
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>


            </div>
        )




}

export default Transactions

