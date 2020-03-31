import React from 'react'
import Title from '../../common/Title'

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


export default Expenses