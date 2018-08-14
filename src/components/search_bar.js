import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    //state can only be manipulated in this syntax inside a constructor
    this.state = { term: '' };
  }

  // syntax used to define a class based method in JS
  // Every class based component must hav a render method
  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}

export default SearchBar;
// State in React  - a plain js object that is used to record and react to user event, each class based component that we define has its own state object. Whenever a components state is changed the component immediately re-renders forcing the children of that component to re-render as well.
