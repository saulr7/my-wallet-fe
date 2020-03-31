import  React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

import Login from '../UserAuth/Login'
import Register from '../UserAuth/Register'
import LandingPage from '../common/LandingPage';

function Welcome() {


        return (

            <Router>

                <nav className="navbar navbar-expand-lg navbar-light bg-light my-card justify-content-between">
                    <span className="navbar-brand" >
                        <Link to="/">My Wallet</Link>
                    </span>
                    <div>
                        <button type="button" className="btn btn-link">
                            <Link to="/login">Sign In</Link>
                        </button>
                        <button type="button" className="btn btn-primary ">
                            <Link className="text-white" to="/register">Sign Up</Link>
                        </button>
                    </div>
                </nav>


                <div className="container">
                    
                    <div className="row pt-3 mt-3">
                        <div className="col text-center">
                            <h3 className="display-4 font-weight-bold">My Wallet</h3>
                            <hr/>
                        </div>
                    </div>


                            
                    <div className="row text-center">

                        <Switch>
                            <Route path="/login">
                                <Login/>
                            </Route>
                            <Route path="/register">
                                <Register></Register>
                            </Route>
                            <Route path="/">
                                <LandingPage></LandingPage>
                            </Route>
                        </Switch>
                    </div>


                </div>
        </Router>
        )
    }




export default Welcome