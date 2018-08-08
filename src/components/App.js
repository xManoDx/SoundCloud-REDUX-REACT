import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import SongsList from './songsList';
import FiltersBar from './filterbar/FiltersBar'
import Navbar from './navbar/Navbar'
import SongContainer from './SongContainer'
// import PlayerComponent from './PlayerComponent';
import { fetchSongs } from '../actions/songActions';
const mapDispatchToProps = { fetchSongs }

class App extends Component {

  componentDidMount() {
    this.props.fetchSongs(this.props.playlistLink);
  }

  render() {
		console.log('THIS IS MY STORE',this.props.filters);

    if (!this.props.tracks.length) {
      return <div />;
    }

    return (
      <div>
	      <Navbar/>
	      <FiltersBar filters={this.props.filters}/>
	      <SongContainer songInfo={this.props.tracks} />
      </div>
		)
	}
}

export default connect(
	state => ({
		tracks: state.tracks,
    filters: state.filters,
    playlistLink: state.playlistLink
	}),
	mapDispatchToProps
)(App);
