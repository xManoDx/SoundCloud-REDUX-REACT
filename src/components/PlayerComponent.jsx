import React from 'react';

import PlayerMarkup from '...';

const Player = (props) => (
  <div>
    { props.currentSong ?
      <PlayerMarkup currentSong={props.currentSong} /> :
      null
    }
  </div>
);

// <audio autoPlay src={this.props.currentSong.stream_url} />
