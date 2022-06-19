import React from "react";
import './SignIn.css'
import { BrowserRouter, Link, Route, Router } from 'react-router-dom';

 
function SignIn() {
    return (
        <div className="signin">
            <br></br>
            <h1 className="head">SIGN IN</h1>
            <h4 className="titleH">PLEASE ENTER YOUR USERNAME AND PASSWORD</h4><br></br>
            <form>
                <div class="row mb-3" className="user">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label> &nbsp;&nbsp;:&nbsp;&nbsp;
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback"></div>
                    </div>
                </div>
                <br></br>
                <div class="row mb-3" className="pass">
                    <label for="inputPassword3" class="col-sm-2 col-form-label" >Password</label> &nbsp;&nbsp;:&nbsp;&nbsp;
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="validationCustomPassword" aria-describedby="inputGroupPrepend" required />
                        <div class="invalid-feedback"></div>
                    </div>
                </div>
                <div class="row mb-3" className="remem">
                    <div class="col-sm-10 offset-sm-2">
                        <div class="form-check">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input class="form-check-input" type="checkbox" id="autoSizingCheck" />
                            <label class="form-check-label" for="autoSizingCheck">
                                Remember me
                            </label>
                        </div>
                    </div>
                </div>
                
                <br></br>
                <div className="but">

                    <button href to="/" type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
            <br></br>
            
            <br></br>
            
            <br></br>
        </div>
    );
}

export default SignIn;