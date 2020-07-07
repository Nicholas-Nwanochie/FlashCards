import React from 'react'
import  '../styles/style.css'
import "../styles/AboutMe.css";
import { connect } from 'react-redux'



import { BrowserRouter, Route, Link,Redirect } from "react-router-dom";

import GoogleAuth from './GoogleAuth'


const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};



const Login = (props) => {
  return (
    <>
      {props.isSignedIn ? <Redirect to="/main" /> : null}
      {/* <div className="over"> */} {/* <div className="body"> */}
      <div class="ui inverted  vertical masthead center aligned segment">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            {/* <div className="ui container">
               <div className="three wide column"> */}

            <h1 data-shadow=" Lighting!"> Lightning!</h1>
            <br></br>
            {/* </div> */}
            {/* </div>
            </div> */}

            <h3 className="ui  image header">
              {/* <img src="assets/images/logo.png" className="image" /> */}
              <i class="paperclip icon text"></i>
              <div className="content text">
                <i class="angle double right icon"></i> Log-in here to study
                <i class="angle double left icon"></i>
              </div>
            </h3>

            <div className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    {/* <input type="text" name="email" placeholder="E-mail address"/> */}
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    {/* <input type="password" name="password" placeholder="Password"/> */}
                  </div>
                </div>
                <GoogleAuth />

                {/* <button type="submit" className="ui fluid large teal submit button">Login</button> */}
              </div>

              <div className="ui error message"></div>
            </div>

            <div className="ui message">
              New to us?{" "}
              <a target="_blank" href="https://plus.google.com/">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <h2></h2> <h1 data-shadow=" FlashCards!"> FlashCards!</h1>
      </div>
      {/* </div> */}
      {/* </div>  */}
    </>
  );
}

export default connect(
  mapStateToProps,
)(Login);
