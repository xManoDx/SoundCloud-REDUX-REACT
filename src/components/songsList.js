import React from 'react'
import Song from './Song'

function SongsList ({songInfo}){
  const list = songInfo.map((song, index) => (<Song songInfo={song} key={index} />))
  return (
    <div className="row">
      {list}
    </div>
  );
};

export default SongsList
