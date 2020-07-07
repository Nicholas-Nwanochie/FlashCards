import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions/index'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

// class GoogleAuth extends Component {


//     componentDidMount(){
// window.gapi.load('client:auth2',() => {
//   window.gapi.client.init({
//       clientId: "240506586188-893cuo3prirmjqipfrdaq9a4mg5nm8jp.apps.googleusercontent.com",
//       scope:'email'
//   }).then(() => {
//     this.auth = window.gapi.auth2.getAuthInstance()
// this.onAuthChange(this.auth.isSignedIn.get())
//     this.auth.isSignedIn.listen(this.onAuthChange)

// })
// })
// }


//     onAuthChange = (isSignedIn) => {
// if(isSignedIn){
//     this.props.signIn()
// }else{
//     this.props.signOut()
// }

//     }

// onSignInClick = () => {
//   this.auth.signIn()
// }

//     onSignOutClick = () => {
//         this.auth.signOut()
//     }



// renderAuthButton(){
// if (this.props.isSignedIn ===null){
//     return null;
// }else if(this.props.isSignedIn){
//     return(
// <button onClick={this.onSignOutClick} className="ui red google button">
//         <i className="google icon"></i>
// Sign Out
// </button>
//     )
// }else{
//     return (
//         <button onClick={this.onSignInClick} className="ui red google button">
//             <i className="google icon"></i>
// Sign In with Google
//         </button>

//     )
// }

// }


//   render() {
//     return (
//       <>
//        {this.renderAuthButton()}
//       </>
//     )
//   }
// }

// const mapStatetoProps = (state)=>{
// return{isSignedIn:state.auth.isSignedIn}

// }
// export default connect(
//     mapStatetoProps,
//     {signIn,
//     signOut}
//     )(GoogleAuth)






class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>
      {this.props.isSignedIn ? null : <Redirect to="/" /> } 
      {this.renderAuthButton()}
    
    
    
    </div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);