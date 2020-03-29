import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { LogOut } from "../../service/AuthService";
import Expenses from "./Expenses/Expenses";


export default function AppRouters() {
  return (
    <Router>

          <nav className="navbar navbar-expand-lg navbar-light bg-light my-card">
              <span className="navbar-brand" >
                  <Link to="/">My Wallet</Link>
              </span>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/expenses">Expenses</Link>
                  </li>
                  <li className="nav-item">
                    <Link  className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/topics">Topics</Link>
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
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/expenses">
                <Expenses/>
              </Route>
            </Switch>
          </div>
      </Router>
  );
}


function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}


function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }
  
  