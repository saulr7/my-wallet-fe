import React from 'react'
import { get_categories_by_user } from '../../../service/CategoryServices';
import NewTransactionModel from '../../../models/NewTransactionModel';
import { AddNewTransactionService } from '../../../service/TransactionService';

interface ICategoy {
    Id          : number;
    Category    : string;
  }
  
interface IState {
    categories : ICategoy[],
    CategoryId  : number;
    Amount      : number;
    UserUID     : string;
    Comment     : string
  }
  


class NewTransaction extends React.Component<{}, IState>{

    state: IState;
 
    constructor(props) {
        super(props);
        
        this.state = {
            categories  : [],
            Amount      : 0,
            UserUID     : '', 
            CategoryId  : 0,
            Comment     : ''
        }
    }


    componentDidMount()
    {
        this.GetCategories()
    }


    GetCategories = () => {
        get_categories_by_user()
        .then((res)=> {
            if (!res.data)
                return
            var data = res.data

            var categories : ICategoy[] = data.data

            this.setState({ categories})
          })
          .catch((err)=> {
            console.log(err);
          })
    }

    OnCategoryChange = (event)=> {
        var CategoryId = event.target.value
        this.setState({
            CategoryId : CategoryId
        })
    }

    OnAmountChange = (event) => {
        var Amount = event.target.value

        this.setState({
            Amount : Amount
        })

    }
   
    OnCommentChange = (event) => {
        var Comment = event.target.value

        this.setState({
            Comment : Comment
        })

    }

    AddNewTransaction = ()=> {
        var model: NewTransactionModel ={
            Amount : this.state.Amount,
            CategoryId : this.state.CategoryId,
            UserUID : '',
            Comment : this.state.Comment

        }

        AddNewTransactionService(model)
       
    }


    render() {

        return (

            <div>
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                          
                            <a className="btn btn-success collapsed m-2" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <i className="fa fa-plus" aria-hidden="true"></i>
                                <span className="m-1">
                                    New Expense
                                </span>
                            </a>
    
                            <div className="collapse p-2" id="collapseExample" >
                                <div className="card card-body my-card">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput">Category:</label>
                                            <select className="custom-select" onChange={this.OnCategoryChange}>
                                                <option >Category:</option>
                                                {this.state.categories.map((category, index)=> {
                                                    return (
                                                    <option key={index} value={category.Id}>{category.Category}</option>
                                                    )
                                                })}
                                            </select>
                                            <button type="button" className="btn btn-link btn-sm text-left">Add Category</button>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Amount:</label>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                id="formGroupExampleInput2" 
                                                placeholder="0.00"
                                                onChange={this.OnAmountChange} />
                                        </div>
                                       
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Comment:</label>
                                            <textarea
                                                className="form-control" 
                                                id="formGroupExampleInput2" 
                                                placeholder="Comment"
                                                onChange={this.OnCommentChange}
                                                >
                                            </textarea>
                                        </div>
                                        <button 
                                            type="button" 
                                            className="btn btn-primary"
                                            onClick={this.AddNewTransaction}>Add</button>
                                    </form>

                                </div>
                            </div>

                    </div>
                </div>
            </div>
        )

    }

}

export default NewTransaction