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
      palindromeAnswers: [],
      lastQueryString: ''
    }
    this.isPalindrome = this.isPalindrome.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);

  }

  handleQueryChange = (event) => {
    this.setState({wordToTest: event.target.value})
  }

  isPalindrome = (event) => {
    event.preventDefault()
    let newPalindrome = this.state.wordToTest.trim()
    if (newPalindrome !== '') {
      let reversedWord = newPalindrome.split("").reverse().join('')
      let answers = this.state.palindromeAnswers

//setting divider
      if(answers.length > 0) {
        let lastQuery = this.state.lastQueryString.length
        let dividerStyle = {
          width: lastQuery * 10 + 150 + "px"
        }
        answers.push(<div style={dividerStyle} key={answers + "divider"} className="divider"/>)
      }
      if (newPalindrome === reversedWord) {
        answers.push(<div key={answers.length} className="palindrome-answer true">{newPalindrome} is a palindrome!</div>)
      } else {
        answers.push(<div key={answers.length} className="palindrome-answer false">{newPalindrome} is not a palindrome</div>)
      }

      this.setState({palindromeAnswers: answers, wordToTest: '', lastQueryString: newPalindrome})
    }
  }

  render() {
    return (
      <div className="App">
        <Title/>
        <div className="horizontal-top style-line"/>
        <div className="vertical-left style-line"/>
        <div className="fade-in">
          <div className="blur-gradient"/>
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
        </div>
      </div>
    );
  }
}

export default App;
