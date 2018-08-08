import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import { setSongs } from '../../actions/songActions';
import { filterSongs } from '../../actions/filter';

const mapDispatchToProps = {
  filterSongs,
  setSongs,
};

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  playlistLink: state.playlistLink,
});

class SongsFilter extends Component {

  fetchSongs = (songsLink) => {
    return fetch(songsLink)
      .then(response => response.json())
      .then(songs => this.props.setSongs(songs));
  }

  link = 'https://api.soundcloud.com/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505';

  onClickAction = () => {
    const newLink = this.link + '&genres=' + this.props.filters;

    this.props.filterSongs(newLink);
    this.fetchSongs(newLink);
  };

  render() {
    return (
      <div className="songs_filter"> <a href="#" onClick={this.onClickAction}>{this.props.filters}</a> </div>
    );
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SongsFilter);
