
import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Data from "../Data/ComicsData";
import Cards from '../components/cards/comicsCards'
import DrawButton from "../components/DrawButton/DrawButton";
import moduleName from '.././styles/card.css'


import $ from "jquery";
import { findDOMNode } from "react-dom";


class Comics extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {
          id: 1,
          eng: "You didn't hit it did you",
          word: "Start by hitting the button",
          question: "don't be shy",
        },
      ],
      currentCard: {},
    };
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.setState({
      cards: Data,

      currentCard: this.getRandomCard(currentCards),
    });
    // });
  }

  getRandomCard(currentCards) {
    var randomIndex = Math.floor(Math.random() * currentCards.length);
    var card = currentCards[randomIndex];
    console.log(card);

    return card;
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards),
    });
  }

  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };

  render() {
    console.log("checking this.app");
    console.log(this.app);

    return (
      <div>
        <Header />
        {/* <div className="ui middle aligned center aligned grid">
          <div className="row">
            <div class="Iam">
              <p>HINTS:</p>
              <b>
                <div class="innerIam">
                  leggera
                  <br />
                  a theme in progress
                  <br />
                  built on bootstrap
                  <br />
                  how I learn stuff
                  <br />
                  how we do it
                </div>
              </b>
            </div>
          </div>
        </div> */}
        <br></br>
        <Cards
          eng={this.state.currentCard.eng}
          word={this.state.currentCard.word}
          question={this.state.currentCard.question}
        />
        <DrawButton drawCard={this.updateCard} />
        <div className="ui middle aligned center aligned grid">
          <div className="row">
            <div class="Iam">
              <button onClick={this.handleToggle}>Hints</button>
            
              <b ref="toggle">
                <div class="innerIam">
                  Mr Freeze = Schwarzenegger
                  <br />
                Scarlet Witch = QuickSilver
                  <br />
                  Wolverine = Canada
                  <br />
                 yellow = Green
                  <br />
                 Thor = rich
                </div>
              </b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comics;
