import React , {useState, useEffect} from 'react'
import Title from '../../common/Title'
import CategoyModel from '../../../models/CategoryModel';
import { get_categories_by_user, remove_category } from '../../../service/CategoryServices';
import NewCategory from './NewCategory';
import Loading from '../../common/Loading';
import { AlertSuccess, AlertError } from '../../../service/Alerts';
import { InitialState } from '../../../reducers/store';
import { useSelector, useDispatch } from 'react-redux';
import { RootDispatcher } from '../../../reducers/actions';


interface StateProps {
    categories : CategoyModel[]
}

const Categories : React.FC <{}> = ()=> {

    const [loading, setLoading] = useState(false);

    var {categories} = useSelector<InitialState, StateProps>((state: InitialState) => {
        return {
            categories: state.categories,
            
        }
    });


    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);


    useEffect(() => {
      
        get_data()            
          
      }, []);

  

        function RemoveCategory(id) {
            setLoading(true)
            remove_category(id)
            .then((res) => {
                setLoading(false)
                 get_data()
                AlertSuccess("Category removed")
            }).catch((err) => {
                setLoading(false)
                console.log(err);
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
                // setCategories(categories)
              })
              .catch((err)=> {
              })}  

        return (
            <div className="container">

                <div className="row">
                    <div className="col">
                        <Title Titulo="Categories"></Title>
                    </div>
                </div>

                <div className="row">
                    <div className="col ">
                        <NewCategory/>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <Loading Loading={loading}/>
                    </div>
                </div>

                <div className="row pb-4">
                    <div className="col">

                        <div className="list-group">
                            {categories.map((category, index)=> {
                                return (
                                    <a key={index} href="#!" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{category.Category}</h5>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={e =>  RemoveCategory(category.Id)}
                                                >
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <small className="text-muted">3 days ago</small>
                                </a>
                                )
                            })}
                            
                        </div>


                    </div>
                </div>
                
            </div>
        )

}


export default Categories