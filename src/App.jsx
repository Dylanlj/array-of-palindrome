import React, { Component } from 'react';
import './App.css';
import Query from './query-form.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordToTest: '',
      palindromeAnswers: []
    }
  }

  handleQueryChange = (event) => {
    this.setState({wordToTest: event.target.value})
  }

  isPalindrome = (event) => {
    event.preventDefault()
    if (this.state.wordToTest !== '') {
      let reversedWord = this.state.wordToTest.split("").reverse().join('')
      let responsePhrase = ""
      if (this.state.wordToTest === reversedWord) {
        responsePhrase = "is a palindrome!"
      } else {
        responsePhrase = "is not a palindrome!"
      }
      let answers = this.state.palindromeAnswers
      answers.push(<div key={answers.length}>{this.state.wordToTest} {responsePhrase}</div>)
      this.setState({palindromeAnswers: answers, wordToTest: ''})
    }
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="experiment"/>
        </div>

        <div className="moving-title">

          <div className="vertical pUp"/>
          <div className="vertical lUp"/>
          <div className="vertical iUp"/>
          <div className="vertical nUpOne"/>
          <div className="vertical nUpTwo"/>
          <div className="vertical dUp"/>
          <div className="vertical rUp"/>
          <div className="vertical mUpOne"/>
          <div className="vertical mUpTwo"/>
          <div className="vertical eUp"/>
          <div className="vertical sUp"/>


          <div className="horizontal pTop"/>
          <div className="horizontal pBottom"/>
          <div className="horizontal aTop"/>
          <div className="horizontal lTop"/>
          <div className="horizontal dTop"/>
          <div className="horizontal dBottom"/>
          <div className="horizontal rTop"/>
          <div className="horizontal rBottom"/>
          <div className="horizontal oTop"/>
          <div className="horizontal eTop"/>
          <div className="horizontal eMiddle"/>
          <div className="horizontal eBottom"/>

          <div className="diagonal aLeft"/>
          <div className="diagonal aRight"/>
          <div className="diagonal nRight"/>
          <div className="diagonal rRight"/>
          <div className="diagonal mRight"/>
          <div className="diagonal mLeft"/>

          <div className="pRight-container">
            <div className="hide-animation pRight">
              <div className="circle pRight"/>
            </div>
          </div>
          <div className="dRight-container">
            <div className="circle dRight"/>
          </div>
          <div className="hide-animation dRight"/>
          <div className="rRight-container">
            <div className="circle rRight"/>
          </div>
          <div className="circle oRight"/>
          <div className="sTop-container">
            <div className="circle sTop"/>
          </div>
          <div className="sBottom-container">
            <div className="circle sBottom"/>
          </div>

        </div>
        <div className="query-container">
          <Query
          handleQueryChange={this.handleQueryChange}
          isPalindrome={this.isPalindrome}
          state={this.state}
          />
          <div className="query-answers">
            {this.state.palindromeAnswers}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
