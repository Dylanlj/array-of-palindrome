import React, { Component } from 'react';

class Search extends Component  {
  render () {
    return (
        <form className="search-form" onSubmit={this.props.isPalindrome}>
          <input type="text" onChange={this.props.handleQueryChange} value={this.props.state.wordToTest}/>
        </form>
    )
  }
}

export default Search
