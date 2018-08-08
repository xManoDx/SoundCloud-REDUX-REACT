import React, {Component} from 'react'
class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    };
  }

  onClick = () => {
    this.setState({ playing: !this.state.playing });
  }


  render() {
    const {songInfo} = this.props;

    const songName = songInfo.title;
    const artistName = songInfo.user.username;
    const avatar = `url("${songInfo.user.avatar_url}")`;
    const cover = songInfo.artwork_url ? `url("${songInfo.artwork_url}")` : 'url("https://at-cdn-s02.audiotool.com/2017/03/24/documents/1WdwVTwTHLm3V1fofi7ZYQw48rDZTpJ/0/cover256x256-143e5e191e9d41f6bce8faa6032ce43e.jpg")';
    return (
      <div className="song_card" onClick={this.onClick}>
        <div className="song_img" style={{backgroundImage: cover}}></div>
        <div className="song_info">
          <div className="artist_avatar" style={{backgroundImage: avatar}}></div>
            <div className="song_artist">
              <div className="song"><a href="#">{songName}</a></div>
                <div className="artist">
              <div className="artist_info"><a href="#">{artistName}</a></div>
              <div className="song_favorite"><i className="fas fa-heart"></i></div>
                </div>
            </div>

        </div>
        { this.state.playing &&
          <audio autoPlay src={songInfo.stream_url + '?client_id=a281614d7f34dc30b665dfcaa3ed7505'} />
        }
      </div>
    );

  }
};

export default Song
