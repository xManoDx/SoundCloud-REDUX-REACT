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

class NavbarLogo extends Component {

  fetchSongs = (songsLink) => {
    return fetch(songsLink)
      .then(response => response.json())
      .then(songs => this.props.setSongs(songs));
  }

  link = 'https://api.soundcloud.com/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505';

  onClickAction = () => {
    this.props.filterSongs(this.link);
    this.fetchSongs(this.link);
  };

  render() {
    return (
      <div className="navbar_logo">
        <i className="fas fa-broadcast-tower"></i>
        <a className="navbar_logo_text nabvbar_margin" href="#" onClick={this.onClickAction}>SoundRedux</a>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLogo);
