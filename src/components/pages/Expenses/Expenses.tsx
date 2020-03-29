import React from 'react'
import Title from '../../common/Title'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Transactions from './Transactions';


class Expenses extends React.Component<{}, {}>{


render() {

        

        return (
            <div className="container">
                <Title Titulo="Expenses"></Title>

                <Router>
                    <Switch>
                        <Route path="/expenses">
                            <ExpensesRoutes/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )

    }

}


function ExpensesRoutes() {
    let match = useRouteMatch();
  
    return (
      <div>

        <div className="row">
            <div className="col text-center">
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <span className="m-1">
                            New
                        </span>
                    </button>
            </div>
        </div>

        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <Link className="nav-link active2"  to={`${match.url}/transactions`}>Transactions</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link "  to={`${match.url}/charts`}>Charts</Link>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="#!">Link</a>
            </li> */}
        </ul>

        <Switch>
            <Route path={`${match.path}/transactions`}>
                <Transactions></Transactions>
            </Route>
            <Route path={`${match.path}/charts`}>
                <h2> Charts</h2>
            </Route>
          <Route path={match.path}>
          </Route>
        </Switch>
      </div>
    );
  }

  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
  
  


export default Expenses