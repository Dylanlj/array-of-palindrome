import React, { Component } from 'react';
import './App.css';
import Search from './search-form.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wordToTest: '',
      palindromeAnswers: []
    }
  }

  handleQueryChange = (event) => {
    console.log(event)
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
        <Search
        handleQueryChange={this.handleQueryChange}
        isPalindrome={this.isPalindrome}
        state={this.state}
        />
        <div>
          {this.state.palindromeAnswers}
        </div>
      </div>
    );
  }
}

export default App;
