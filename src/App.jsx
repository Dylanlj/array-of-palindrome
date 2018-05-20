import React, { Component } from 'react';
import './App.css';
import Query from './query-form.jsx'
import Title from './title.jsx'
import honeycomb from './images/honeycomb.jpg'

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
      let answers = this.state.palindromeAnswers
      if (this.state.wordToTest === reversedWord) {
        answers.push(<div key={answers.length} className="palindrome-answer true">{this.state.wordToTest} is a palindrome!</div>)
      } else {
        answers.push(<div key={answers.length} className="palindrome-answer false">{this.state.wordToTest} is not a palindrome!</div>)
      }

      this.setState({palindromeAnswers: answers, wordToTest: ''})
    }
  }

  render() {
    return (
      <div className="App">
        <Title/>
        <div className="fade-in">
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
          <img src={honeycomb} className="honeycomb left" alt="honeycomb"/>
          <img src={honeycomb} className="honeycomb right" alt="honeycomb"/>
        </div>
      </div>
    );
  }
}

export default App;
