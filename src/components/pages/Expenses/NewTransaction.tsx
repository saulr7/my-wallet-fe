import React , {useState, useEffect} from 'react'
import { get_categories_by_user } from '../../../service/CategoryServices';
import NewTransactionModel from '../../../models/NewTransactionModel';
import { AddNewTransactionService, GetTransactionsByUser, ValidateNewTransactionData } from '../../../service/TransactionService';
import CategoyModel from '../../../models/CategoryModel';
import NewCategory from '../Categories/NewCategory';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatcher } from '../../../reducers/actions';
import { InitialState } from '../../../reducers/store';
import Loading from '../../common/Loading';
import TransactionModel from '../../../models/Transaction';
import { AlertError } from '../../../service/Alerts';


  
interface StateProps {
    categories : CategoyModel[],

  }
  


const NewTransaction : React.FC<{} > = () => {

    const [CategoryId, setCategoryId] = useState(0);
    const [Amount, setAmount] = useState(0);
    const [Comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);

    var {categories} = useSelector<InitialState, StateProps>((state: InitialState) => {
        return {
            categories: state.categories,

            
        }
    });
    
    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);


    useEffect(()=> {
        GetCategories()
    }, [])


    function GetCategories() {
        // setLoading(true)
        get_categories_by_user()
        .then((res)=> {
            setLoading(false)
            if (!res.data)
                return
            
            var data = res.data
            var categories : CategoyModel[] = data.data

            rootDispatcher.LoadCategories(categories)

          })
          .catch((err)=> {
            setLoading(false)
            console.log(err);
          })
    }

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


    function AddNewTransaction () {
        var model: NewTransactionModel ={
            Amount      : Amount,
            CategoryId  : CategoryId,
            UserUID     : '',
            Comment     : Comment

        }

        if(!ValidateNewTransactionData(model))
            return 

        AddNewTransactionService(model)
        .then((res) => {
            GetTransactions()
            return true
        }).catch((err) => {
            console.log(err);
            AlertError('Something went wrong')
            return  false
        });
        
    }


        return (

            <div>
                <div className="row">

                    <div className="col text-right">

                        <a className="btn btn-success collapsed m-2" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            <span className="m-1">
                                New Expense
                            </span>
                        </a>
                        
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                          
                           
    
                            <div className="collapse p-2" id="collapseExample" >
                                <div className="card card-body my-card">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput">Category:</label>
                                            <select className="custom-select" onChange={e => setCategoryId( parseInt (e.target.value))}>
                                                <option >Category:</option>
                                                {categories.map((category, index)=> {
                                                    return (
                                                    <option key={index} value={category.Id}>{category.Category}</option>
                                                    )
                                                })}
                                            </select>
                                            {/* <button type="button"  data-toggle="modal" data-target="#modalNewCategory" className="btn btn-link btn-sm text-left">Add Category</button> */}
                                            <div>
                                                <NewCategory/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Amount:</label>
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                id="formGroupExampleInput2" 
                                                placeholder="0.00"
                                                onChange={e => setAmount( parseFloat( e.target.value))} />
                                        </div>
                                       
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Comment:</label>
                                            <textarea
                                                className="form-control" 
                                                id="formGroupExampleInput2" 
                                                placeholder="Comment"
                                                onChange={e => setComment(e.target.value)}
                                                >
                                            </textarea>
                                        </div>
                                        <button 
                                            type="button" 
                                            className="btn btn-primary"
                                            onClick={AddNewTransaction}>Add</button>
                                    </form>

                                </div>
                            </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <Loading Loading={loading}/>
                    </div>
                </div>

            </div>
        )

    

}

export default NewTransaction