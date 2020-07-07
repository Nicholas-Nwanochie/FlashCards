import React, { Component } from 'react'
import Doc from "../img/doc.jpg";
import Cam from "../img/cam.jpg";
import Octagon from "../img/octagon.png";
import Light from "../img/light.jpg";
import Bank from "../img/bank.jpg";
import Tape from "../img/tape.jpg";
import Footer from './Footer'

import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from "./Header";
import Code from "../img/code1.jpg";
import "../styles/AboutMe.css";
import $ from "jquery";
import { findDOMNode } from "react-dom";

class AboutMe extends Component {
  
  render() {
const style = {height:"200px", width:"300px"}

    return (
      <>
        <Header />
        <div className="big ui raised very padded text container ">

        
          <h1 data-shadow="INFO!" style={{ color: "black" }}> INFO!</h1> 
           
</div>
        <div class="ui raised very padded text container segment">
          <h2 class="ui header">Nicholas Nwanochie</h2>
          <p>This site was nade was the intention of helping students of all ages and backgrounds to continue their studying efforts in and out of the classroom.
            In helping to pursue that goal this app was created,Lightning Flashcards. As flashcards are a valuable tool in any students efforts for education being able to digitize the cards will 
            add in the avalability of studying at a moments notice.
          </p>
          <p>Lightning Flashcards is your online flashcard app that will allow you to 
            not only study anywhere but also do it in an interactive way. With multiple flashcard sets, provided hints, and a variety of levels of card difficulty, you
            will find all you need with us, and More!
          </p>
        </div>
{/* 
        <div class="ui fixed inverted menu">
          <div class="ui container">
            <a href="#" class="header item">
              <img class="logo" src="assets/images/logo.png"/>
                Project Name
      </a>
              <a href="#" class="item">Home</a>
              <div class="ui simple dropdown item">
                Dropdown <i class="dropdown icon"></i>
                <div class="menu">
                  <a class="item" href="#">Link Item</a>
                  <a class="item" href="#">Link Item</a>
                  <div class="divider"></div>
                  <div class="header">Header Item</div>
                  <div class="item">
                    <i class="dropdown icon"></i>
            Sub Menu
            <div class="menu">
                      <a class="item" href="#">Link Item</a>
                      <a class="item" href="#">Link Item</a>
                    </div>
                  </div>
                  <a class="item" href="#">Link Item</a>
                </div>
              </div>
    </div>
          </div> */}

          <div class="ui main text container">
            <h1 class="ui header">Nicholas's other works</h1>
            <p>Site and apps made and hosted by Nicholas Nwnaochie</p>
            {/* <img style={style} className="wireframe" src={Cam}/>
          <img style={style} className="wireframe" src={Doc}/>
          <img style={style} className="wireframe" src={Octagon}/>
          <img style={style} className="wireframe" src={Light}/>
          <img style={style} className="wireframe" src={Tape}/>
          <img style={style} className="wireframe" src={Bank}/> */}
                       
  </div>

        <div class="ui items">
          <div class="item">
            <a class="ui small image">
              <img style={style} className="wireframe" src={Bank} />
    </a>
              <div class="content">
                <a class="header">Bank app</a>
                <div class="description">
                  <p>Banking application made via C++</p>
                <p>C++</p>
                </div>
              </div>
  </div>
          </div>


        <div class="ui items">
          <div class="item">
            <a class="ui small image">
              <img style={style} className="wireframe" src={Tape} />
            </a>
            <div class="content">
              <a class="header">Youtube clone</a>
              <div class="description">
                <p>Youtube app made via react and Youtube API</p>
                <p>JAVASCRIPT, HTML/CSS, REACT, JQUERY</p>
              </div>
            </div>
          </div>
        </div>



        <div class="ui items">
          <div class="item">
            <a class="ui small image">
              <img style={style} className="wireframe" src={Light} />
            </a>
            <div class="content">
              <a class="header">Eletric car charging app</a>
              <div class="description">
                <p>App made to find local chaging stations for electric cars</p>
                <p>NODEJS, JAVASCRIPT ES6</p>
              </div>
            </div>
          </div>
        </div>


        <div class="ui items">
          <div class="item">
            <a class="ui small image">
              <img style={style} className="wireframe" src={Octagon} />
            </a>
            <div class="content">
              <a class="header">MMA SITE</a>
              <div class="description">
                <p>Site used to tack MMA events aswell as buy tickets via ticket master</p>
                <p>HTML5, CSS3, JAVASCRIPT ES6, JQUERY , GOOGLE API, PYTHON</p>
              </div>
            </div>
          </div>
        </div>


        <div class="ui items">
          <div class="item">
            <a class="ui small image">
              <img style={style} className="wireframe" src={Doc} />
            </a>
            <div class="content">
              <a class="header">Corona Tracker</a>
              <div class="description">
                <p>App made to track the Corona virus via country</p>
                <p>HTML5, CSS3, JAVASCRIPT ES6, JQUERY , GOOGLE API,</p>
             
              </div>
            </div>
          </div>
        </div>


        <div class="ui items">
          <div class="item">
            <a class="ui small image">
              <img style={style} className="wireframe" src={Cam} />            </a>
            <div class="content">
              <a class="header">Free stock photos</a>
              <div class="description">
                <p>App made to provide a set of stock photos using react.</p>
                <p>JAVASCRIPT, HTML/CSS, REACT, JQUERY</p>
               
              </div>
            </div>
          </div>
        </div>
        <Footer/>


      </>
    );
  }
}

export default AboutMe
