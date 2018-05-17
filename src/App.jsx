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
        <h2> PALINDROMES </h2>
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
