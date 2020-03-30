import React from 'react'
import Title from '../../common/Title'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Transactions from './Transactions';
import NewTransaction from './NewTransaction';


class Expenses extends React.Component<{}, {}>{


    SetActive = (tab)=> {
        console.log(tab);
    }

    render() {
        
            return (
                <div className="container">
                    <Title Titulo="Expenses"></Title>

                    <div>

                        <NewTransaction/>
                        </div>

                        <div>
                        <Transactions></Transactions>
                    </div>

                    {/* <Router>
                        <Switch>
                            <Route path="/expenses">
                                <ExpensesRoutes/>
                            </Route>
                        </Switch>
                    </Router> */}
                </div>
            )

        }

    }


function ExpensesRoutes() {
    let match = useRouteMatch();
  
    return (
      <div>

        <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                <Link className="nav-link"  to={`${match.url}/transactions`}  >Transactions</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link "  to={`${match.url}/charts`}>Charts</Link>
            </li>
        </ul>

        <div>

            <NewTransaction/>
        </div>

        <div>
            <Transactions></Transactions>
        </div>

        {/* <Switch>
            <Route path={`${match.path}/transactions`}>
                <Transactions></Transactions>
            </Route>
            <Route path={`${match.path}/charts`}>
                <h2> Charts</h2>
            </Route>
          <Route path={match.path}>
          </Route>
        </Switch> */}
      </div>
    );
  }

  


export default Expenses