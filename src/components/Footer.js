import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <>
            <div className="ui inverted vertical footer segment">
                <div className="ui container">
                    <div className="ui stackable inverted divided equal height stackable grid">
                        <div className="six wide column">
                            <h4 className="ui inverted header">Links</h4>
                            <div className="ui inverted link list">
                                <a href="#" className="item">
                                    Home
                  </a>
                                <a href="#" className="item">
                                    Study{" "}
                                </a>
                                <a href="#" className="item">
                                    Test
                  </a>
                                <a href="#" className="item">
                                    Profile
                  </a>
                            </div>
                        </div>
          
                        <div className="seven wide column">
                            <h4 className="ui inverted header">App creator</h4>
                            <div className="field">
                                <label>
                                    {" "}
                                    <i className="paint brush icon"></i> Made by Nicholas
                    Nwanochie
                    <br></br>
                                    <br></br>
                                    <i class="upload icon"></i>
                                    <a target="_blank" href="http://nicholasnwanochie.com/">
                                        Portfolio
                    </a>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
  }
}

export default Footer
