import React, { Component } from 'react';


import SongsList from './songsList'

class SongContainer extends Component {


  render() {
    return (
      <div className="content_container">
        <SongsList songInfo={this.props.songInfo}/>
      </div>
    );
  };
};

export default SongContainer
