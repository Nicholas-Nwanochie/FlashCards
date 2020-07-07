import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from "./GoogleAuth";
const Header = (props) => {

    
  return (
    <>

          <div className="ui large top fixed hidden menu">
              <div className="ui container">
                  <a className="toc item">
                      <i className="sidebar icon"></i>
                  </a>
                  <a className=" item">Home</a>
                  <a className="item">
                      <i className="book icon"></i>Study
              </a>
                  <Link to="/main/study" className="item">
                      <i className="pencil alternate icon"></i>Test
              </Link>
                  <a className="item">
                      <i className="user circle icon"></i>Profile
              </a>
                  <a className="item">
                      <i className="users icon"></i>Group
              </a>
                  <Link to="/main/AboutMe" className="item">
                      <i className="info icon"></i>About Us
              </Link>
                  <div className="right item">
                      <Link className="ui inverted button">
                          {/* <i className="power off icon"></i> */}
                          <GoogleAuth />
                      </Link>
                  </div>
              </div>
          </div>

          {/* <!-- Sidebar Menu --> */}
          <div className="ui vertical inverted sidebar menu">
              <a className="toc item">
                  <i className="sidebar icon"></i>
              </a>
              <a className=" item">Home</a>
              <a className="item">
                  <i className="book icon"></i>Study
              </a>
              <Link to="/main/study" className="item">
                  <i className="pencil alternate icon"></i>Test
              </Link>
              <a className="item">
                  <i className="user circle icon"></i>Profile
              </a>
              <a className="item">
                  <i className="users icon"></i>Group
              </a>
              <Link to="/main/AboutMe" className="item">
                  <i className="info icon"></i>About Us
              </Link>
              {/* <div className="right item"> */}
              <Link className="ui inverted button">
                  {/* <i className="power off icon"></i> */}
                  <GoogleAuth />
              </Link>
              {/* </div> */}
          </div>
          {/* <div className="pusher"> */}
          <h3 class="ui block header">
              <div className="ui inverted   center aligned segment">
                  <div className="ui container">
                      <div className="ui large secondary inverted pointing menu">
                          <a className="toc item">
                              <i className="sidebar icon"></i>
                          </a>
                          <Link to="/main" className=" item">Home</Link>
                          
                          <Link to="/main/Test" className="item">
                              <i className="pencil alternate icon"></i>Test
              </Link>
                       
                          <Link to="/main/study" className="item">
                              <i className="book icon"></i>Study
              </Link>
                          <a className="item">
                              <i className="user circle icon"></i>Profile
              </a>
                          <a className="item">
                              <i className="users icon"></i>Group
              </a>
                          <Link to="/main/AboutMe" className="item">
                              <i className="info icon"></i>About Us
              </Link>
                          <div className="right item">
                              <a className="ui inverted button">
                                  {/* <i className="power off icon"></i> */}
                                  <GoogleAuth/>
                </a>
               
                          </div>
                      </div>
                  </div>
              </div>      
</h3>
           
          
    </>
  )
}

export default Header


const mapStateToProps = (state) =>{
    //props.userID
    return{
        userID: state.auth.userId
    }
}
