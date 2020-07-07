import React, { Component } from 'react'


import "../../styles/TestStyle.css"
import Data from "../../Data/TestQuestions"
import QuestionBox from './QuestionBox'
import Results from "./Results"
import Header from '../Header'


class App extends Component {

    state = {
        questionBank: [],
        score: 0,
        responses: 0

    }

    getQuestions = () => {
        Data().then(question => {
            this.setState({
                questionBank: question
            })
        })


    }

    playAgain = () => {
        this.getQuestions()
        this.setState({
            score: 0,
            responses: 0
        })
    }



    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1

            })
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5

        })
    }


    componentDidMount() {
        this.getQuestions()
    }

    render() {
        return (
            <>
            <Header/>
            <div className="container12">
                <div className="title" >Quiz time</div>
                {this.state.questionBank.length > 0 &&
                    this.state.responses < 5 &&
                    this.state.questionBank.map
                        (({ question, answers, correct, questionId }) =>
                            <QuestionBox
                                question={question}
                                options={answers}
                                key={questionId}
                                selected={answer => this.computeAnswer(answer, correct)}
                            />
                        )}
                {this.state.responses === 5 ? (<Results score={this.state.score}
                    playAgain={this.playAgain} />) : null}
            </div>
            </>
        )
    }
}

export default App

