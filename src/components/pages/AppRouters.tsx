import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LogOut } from "../../service/AuthService";
import Expenses from "./Expenses/Expenses";
import Categories from "./Categories/Categories";

export default function AppRouters() {

  return (
    <Router>

          <nav className="navbar navbar-expand-lg navbar-light bg-light my-card">
              <span className="navbar-brand" >
                  <Link to="/">My Wallet</Link>
              </span>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item font-weight-bold">
                      <Link className="nav-link" to="/expenses">Expenses</Link>
                  </li>
                  <li className="nav-item font-weight-bold">
                    <Link  className="nav-link" to="/categories">Categories</Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <button type="button" className="btn btn-danger" onClick={LogOut}>
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                    Sign Out
                  </button>
                </form>
              </div>
            

              
          </nav>

          <div>

            <Switch>
              <Route path="/categories">
                <Categories/>
              </Route>
              <Route path="/expenses">
                <Expenses/>
              </Route>
            </Switch>
          </div>
      </Router>
  );
}

  
  