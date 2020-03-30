import React from 'react'

import SignUpModel from '../../models/SignUpModel'
import {SignUp} from '../../service/AuthService'
import Loading from '../common/Loading';

type IProps = {
    
}
interface IState {
    email           : string;
    firstName       : string;
    lastaName       : string;
    password        : string;
    confirmPassword : string;
    loading         : boolean
  }
  


class Register extends React.Component<IProps, IState> {

    state: IState;
  
    constructor(props: IProps) {
      super(props);
        this.state = { 
            email           : '',
            firstName       : '',
            lastaName       : '',
            password        : '',
            confirmPassword : '',
            loading         : false
        };
    }


    emailChanged= (event)=> {
        var email = event.target.value
        this.setState({ email : email })
    
      }
    
    firstNmaeChanged= (event)=> {
        var firstName = event.target.value
        this.setState({firstName})
    
      }
    lastNmaeChanged= (event)=> {
        var lastaName = event.target.value
        this.setState({lastaName})
    
      }
    
    passwordChanged = (event)=> {
        var password = event.target.value
        this.setState({password})
    
      }
   
    confirmPasswordChanged = (event)=> {
        var confirmPassword = event.target.value
        this.setState({ confirmPassword})
    
      }
    
      _SignUp = ()=>{
        this.setState({loading : true})
        var model : SignUpModel = {email : this.state.email, firstName : this.state.firstName
            , lastaName : this.state.lastaName, password :this.state.password , confirmPassword : this.state.confirmPassword }
        SignUp(model)
        this.setState({loading : false})
       
      }


    render() {
       

        return (
            <div className="col-10  col-md-6 col-lg-4 offset-1  offset-md-3 offset-lg-4 mt-4 py-4 my-4 card-box bg-white" id="cardLogin" >
                  <h3 className="display-5 font-weight-bold">Sign Up</h3>

                    <label className="sr-only" htmlFor="txtUsuario">Email</label>
                    <div className="input-group mb-2 mr-sm-2 pt-3 mt-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input 
                          type="email" 
                          className="form-control" 
                          name="txtEmpleadoCodigo" 
                          id="txtUsuario" 
                          value={this.state.email}
                          placeholder="Email" 
                          onChange={this.emailChanged}
                          />
                    </div>
                   
                    <label className="sr-only" htmlFor="txtFirstName">Name</label>
                    <div className="input-group mb-2 mr-sm-2 pt-3 mt-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="txtFirstName" 
                          id="txtFirstName" 
                          value={this.state.firstName}
                          placeholder="Fisrt name" 
                          onChange={this.firstNmaeChanged}
                          />
                    </div>

                    <label className="sr-only" htmlFor="txtLastName">LastName</label>
                    <div className="input-group mb-2 mr-sm-2 pt-3 mt-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="txtLastName" 
                          value={this.state.lastaName}
                          id="txtLastName" 
                          placeholder="Last name" 
                          onChange={this.lastNmaeChanged}
                          />
                    </div>

                    
                    <label className="sr-only" htmlFor="txtPassword">Password</label>
                    <div className="input-group mb-2 mr-sm-2 pt-3 mt-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                 <i className="fa fa-key" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input 
                          type="password" 
                          className="form-control" 
                          name="txtPassword" 
                          id="txtPassword" 
                          value={this.state.password}
                          placeholder="Password"
                          onChange={this.passwordChanged}  />
                    </div>
                    
                    
                    <label className="sr-only" htmlFor="txtConfirmPassword">ConfirmPassword</label>
                    <div className="input-group mb-2 mr-sm-2 pt-3 mt-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                 <i className="fa fa-key" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input 
                          type="password" 
                          className="form-control" 
                          name="txtConfirmPassword" 
                          value={this.state.confirmPassword}
                          id="txtConfirmPassword" 
                          placeholder="Confirm password"
                          onChange={this.confirmPasswordChanged}  />
                    </div>
                     

                    <div className="row">
                      <div className="col text-center">
                          <Loading Loading={this.state.loading}/>
                      </div>
                    </div>
            
                    <div className="form-group">
                        <div className={"row "}>
                            <div className="col col-sm-12 col-md-8 offset-md-2  justify-content-center d-flex pt-2 mt-2" >
                                <button 
                                  type="submit" 
                                  className="btn btn-primary btn-md btn-block" 
                                  onClick={this._SignUp}>Sign Up</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

}

export default Register