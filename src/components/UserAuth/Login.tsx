import  React from 'react'
import './login.css'

import { SignIn } from '../../service/AuthService'
import SignInModel from '../../models/SignInModel';
import Loading from '../common/Loading';

type IProps = {
  
  }

  interface IState {
    email :string;
    password : string;
    loading   : boolean
  }
  

class Login extends React.Component<IProps, IState>{

    state: IState;
  
  constructor(props: IProps) {
    super(props);
    this.state = { 
      email : '',
      password : '',
      loading : false
  };
  }
  emailChanged= (event)=> {

    var email = event.target.value
    this.setState({
      email : email
    })

  }

  passwordChangeds = (event)=> {
    var password = event.target.value
    this.setState({
      password : password
    })

  }

  SignIn = ()=>{
    this.setState({loading : true})
    var model : SignInModel = { email : this.state.email,  password :this.state.password }
    SignIn(model)
    this.setState({loading : false})
   
  }
  

  public  render() {
    
        return (
          <div className="col-10  col-md-6 col-lg-4 offset-1  offset-md-3 offset-lg-4 mt-4 py-4 card-box bg-white" id="cardLogin" >
                <h3 className="display-5 font-weight-bold">Login</h3>


                <h5 className="text-justify my-4">
                    {/* Para esta aplicación se ha creado un nuevo usuario y una nueva contraseña */}
                  </h5>
                  
                  <label className="sr-only" htmlFor="txtUsuario">Usuario</label>
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
                        placeholder="Email" 
                        onChange={this.emailChanged}
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
                        placeholder="Password"
                        onChange={this.passwordChangeds}  />
                  </div>
          

                  <div className="row">
                      <div className="col text-center">
                          <Loading Loading={this.state.loading}/>
                      </div>
                  </div>
                 
          
                  <div className="form-group">
                      <div className={"row  mt-3"}>
                          <div className="col col-sm-12 col-md-8 offset-md-2  justify-content-center d-flex pt-2 mt-2" >
                              <button 
                                type="submit" 
                                className="btn btn-primary btn-md btn-block" 
                                onClick={this.SignIn}>Sign In</button>
                          </div>
                      </div>
                  </div>

                  {/* <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-link">Create account</button>
                    </div>
                  </div> */}


            </div>
        )
    }

}

export default Login