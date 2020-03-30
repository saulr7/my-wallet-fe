import React from 'react'
import Title from '../../common/Title'
import CategoyModel from '../../../models/CategoryModel';
import { get_categories_by_user } from '../../../service/CategoryServices';
import NewCategory from './NewCategory';
import Loading from '../../common/Loading';



interface IState {
    categories : CategoyModel[],
    loading    : boolean
  }
  

class Categories extends React.Component<{}, IState> {

    state : IState

    constructor(props) {
        super(props);
        
        this.state = {
            categories : [],
            loading     : false
        }
    }

    componentDidMount()
    {
        this.GetCategories()
    }

    GetCategories = () => {
        this.setState({loading : true})
        get_categories_by_user()
        .then((res)=> {
            this.setState({loading : false})
            if (!res.data)
                return
            var data = res.data

            var categories : CategoyModel[] = data.data

            this.setState({ categories})
          })
          .catch((err)=> {
            this.setState({loading : false})
            console.log(err);
          })
    }


    render() {

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
                        <Loading Loading={this.state.loading}/>
                    </div>
                </div>

                <div className="row pb-4">
                    <div className="col">

                        <div className="list-group">
                            {this.state.categories.map((category, index)=> {
                                return (
                                    <a key={index} href="#!" className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{category.Category}</h5>
                                            <button className="btn btn-danger">
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

}
export default Categories