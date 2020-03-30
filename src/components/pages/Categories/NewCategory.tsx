import * as React from 'react';
import { add_category } from '../../../service/CategoryServices';
import { NewCategoryModel } from '../../../models/CategoryModel';
import { AlertSuccess, AlertError, AlertWarning } from '../../../service/Alerts';
import Loading from '../../common/Loading';

export interface IAppProps {
}

interface IState {
    Category    : '',
    loading     : boolean
}

export default class NewCategory extends React.Component<IAppProps, IState> {

    state : IState

    constructor(props : IAppProps) {
        super(props);

        this.state = {
            Category    : '',
            loading     : false
        }
        
    }


    OnCategoryTextChange = (event)=> {
        var Category = event.target.value
        this.setState({Category  })
    }


    AddCategory = ()=>{

        if(!this.state.Category)
        {
            AlertWarning("Category can't be empty")
            return
        }
        
        this.setState({loading : true})
    
        var model : NewCategoryModel = {Category : this.state.Category, UserUID : ''}
        add_category(model)
        .then((res) => {
            this.setState({loading : false, Category : ''})
            AlertSuccess('Category added')
        }).catch((err) => {
            this.setState({loading : false})
            AlertError("Something went wrong")
        });
    }

  public render() {
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
                            <input 
                                type="text" 
                                className="form-control" id="txtCategory" placeholder="Category..."
                                onChange={this.OnCategoryTextChange}
                                />
                        </div>

                </div>


                <div className="row">
                    <div className="col text-center">
                        <Loading Loading={this.state.loading}/>
                    </div>
                </div>


                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={this.AddCategory}
                        >Save</button>
                </div>
                </div>
            </div>
            </div>

        
      </>
    );
  }
}
