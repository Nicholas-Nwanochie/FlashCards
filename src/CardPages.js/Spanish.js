import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Data from "../Data/Spanish";
import Cards from '../components/cards/SpanishCards'
import DrawButton from "../components/DrawButton/DrawButton";
import moduleName from '.././styles/card.css'


import $ from "jquery";
import { findDOMNode } from "react-dom";


class Spanish extends Component {
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
              
                <br></br>
                <Cards
                    eng={this.state.currentCard.eng}
                    word={this.state.currentCard.word}
                    question={this.state.currentCard.question}
                />
                <DrawButton drawCard={this.updateCard} />
                <div className="ui middle aligned center aligned grid">
                    <div className="row">
                        <div className="Iam">
                            <button onClick={this.handleToggle}>Hints</button>

                            <b className="innerIam" ref="toggle">
                                <div >
                                    sister = hermana
                  <br />
                 grandfather = abuelo
                  <br />
                 sport = deporte
                  <br />
                team = equipo
                  <br />
                 game = partido
                </div>
                            </b>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default Spanish;
