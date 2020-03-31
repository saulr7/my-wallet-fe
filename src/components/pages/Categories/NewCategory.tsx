import React , {useState} from 'react'
import { add_category, get_categories_by_user } from '../../../service/CategoryServices';
import CategoyModel, { NewCategoryModel } from '../../../models/CategoryModel';
import { AlertSuccess, AlertError, AlertWarning } from '../../../service/Alerts';
import Loading from '../../common/Loading';
import { useDispatch } from 'react-redux';
import { RootDispatcher } from '../../../reducers/actions';

export interface IAppProps {
}

const NewCategory : React.FC<IAppProps>  = () => {


    const [loading, setLoading] = useState(false);
    const [Category, setCategory] = useState('');




    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);

    function AddCategory(){

        if(!Category)
        {
            AlertWarning("Category can't be empty")
            return
        }
        
        setLoading(true)
    
        var model : NewCategoryModel = {Category : Category, UserUID : ''}
        add_category(model)
        .then((res) => {
            setLoading(false)
            get_data()
            setCategory('')
            AlertSuccess('Category added')
        }).catch((err) => {
            setLoading(false)
            AlertError("Something went wrong")
        });
    }


    function get_data() {

        setLoading(true)
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
          })}  

    return (
      <>

            <div className="text-right">
                <button type="button" className="btn btn-success m-2 " data-toggle="modal" data-target="#modalNewCategory">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <span className="m-1">
                        New Category
                    </span>
                </button>

            </div>


            <div className="modal fade" id="modalNewCategory" tabIndex={-1} role="dialog" aria-labelledby="modalNewCategory" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModal3Label">New Category</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="txtCategory">Category:</label>
                            {Category}
                            <input 
                                type="text" 
                                value={Category}
                                className="form-control" id="txtCategory" placeholder="Category..."
                                onChange={e => setCategory(e.target.value)}
                                />
                        </div>

                </div>


                <div className="row">
                    <div className="col text-center">
                        <Loading Loading={loading}/>
                    </div>
                </div>


                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={AddCategory}
                        >Save</button>
                </div>
                </div>
            </div>
            </div>

        
      </>
    );
  
}


export default NewCategory