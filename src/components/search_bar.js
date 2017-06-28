/**
 * Import vendor modules
 */
import React, {Component} from 'react';

/**
 * Searchbar component class
 */
class SearchBar extends Component {
  /**
   * Searchbar constructor functions
   * @param  {Object} props constructor arguments
   */
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.state = {term: ''};
  }

  onSearch(event) {
    let val = event.target.value;
    this.setState({term: val});
    this.props.onSearchInput(this.state.term);
  }

  /**
   * render component
   * @return {String}
   */
  render() {
    return(
      <div className="search-bar">
        <input onChange={this.onSearch} />
      </div>
    );
  }
}

export default SearchBar;
