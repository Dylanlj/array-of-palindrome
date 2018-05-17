import React, { Component } from 'react';

class Query extends Component  {
  render () {
    return (
        <form  onSubmit={this.props.isPalindrome}>
          <input type="text" className="query-form" onChange={this.props.handleQueryChange} value={this.props.state.wordToTest}/>
        </form>
    )
  }
}

export default Query
