import React from 'react'
import { GetTransactionsByUser } from '../../../service/TransactionService'
import { AlertError } from '../../../service/Alerts';
import TransactionModel from '../../../models/Transaction';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import NoData from '../../common/NoData';
import Loading from '../../common/Loading';

interface IState {
    transactions : TransactionModel[],
    startDate    : Date,
    loading      : boolean
}

class Transactions extends React.Component<{}, IState> {

    state: IState;
 
    constructor(props) {
        super(props);
        
        this.state = {
          transactions : [],
          startDate : new Date(),
          loading   : false
        }
    }

    componentDidMount(){
        this.GetTransactions()
    }


    GetTransactions = ()=> {
        this.setState({loading : true})
        GetTransactionsByUser()
        .then((res) => {
            this.setState({loading : false})
            if (!res.data)
                return
            var data = res.data

            var transactions : TransactionModel[] = data.data
            
            this.setState({ transactions})

        }).catch((err) => {
            this.setState({loading : false})
            AlertError('Something went wrong')
        });
    }

    setStartDate = (date)=>{

        console.log(date);

    }


    render() {

        return (
            <div>
                <h2 className="font-weight-bold">
                    Transactions
                </h2>

                <div className="row">
                    <div className="col text-center">
                        <Loading Loading={this.state.loading}/>
                    </div>
                </div>

                <a className="btn btn-link collapsed" data-toggle="collapse" href="#collapseFilter" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-filter" aria-hidden="true"></i>
                </a>
                <div className="collapse" id="collapseFilter" >
                    <div className="row p-2">
                        <div className="col-12 col-md-4 offset-md-2 text-center">
                            <span className="p-2">From:</span>
                            <i className="fa fa-calendar  fa-lg p-1" aria-hidden="true"></i>
                            <DatePicker selected={this.state.startDate} onChange={date => this.setStartDate(date)} />
                        </div>
                        <div className="col-12 col-md-4  text-center">
                            <span className="p-2">To:</span>
                            <i className="fa fa-calendar  fa-lg p-1" aria-hidden="true"></i>
                            <DatePicker selected={this.state.startDate} onChange={date => this.setStartDate(date)} />
                        </div>
                        <div className="col-12 text-center m-2 p-2">
                            <button 
                                type="button" 
                                className="btn btn-primary">Load</button>
                        </div>
                    </div>
                </div>




                <div className="row">

                    <div className="col text-center">
                        <NoData noData={this.state.transactions.length ===0} Message="Add new expenses" ></NoData>
                    </div>
                </div>



                <table className={"table  bg-white " + (this.state.transactions.length ===0 ? "d-none" : "")}>
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
                            this.state.transactions.map((transaction, index)=> {
                                return (
                                    <tr key={index}>
                                        <td >{transaction.Category}</td>
                                        <td>{transaction.CreatedAtDate}</td>
                                        <td>{ transaction.Amount.toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-danger">
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


}

export default Transactions

