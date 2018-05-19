import React, { Component } from 'react';

class Query extends Component  {
  render () {
    return (
        <form  onSubmit={this.props.isPalindrome}>
          <input type="text" placeholder="Check if a word is a palindrome" className="query-form" onChange={this.props.handleQueryChange} value={this.props.state.wordToTest}/>
        </form>
    )
  }
}

export default Query
