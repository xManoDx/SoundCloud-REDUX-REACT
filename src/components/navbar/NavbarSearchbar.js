import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { debounce } from 'lodash/debounce'

import { setSongs } from '../../actions/songActions';
import { searchSongs } from '../../actions/search';
const mapDispatchToProps = { searchSongs }

class NavbarSearchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  render() {
    return (
      <div className="navbar_searchbar nabvbar_margin">
        <i className="navbar_search_icon fas fa-search"></i>
        <input type="text" className="navbar_search_input" placeholder="SEARCH" onChange={this.onChange}/>
      </div>
    );
  };

  onChange = (e) => {
    this.setState({ searchValue: e.target.value });
    this.props.searchSongs(this.link + '&q=' + e.target.value);
  }




  link = 'https://api.soundcloud.com/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505';

};

export default connect(

	state => ({
		playlistLink: state.playlistLink
	}),
	mapDispatchToProps
)(NavbarSearchbar);
