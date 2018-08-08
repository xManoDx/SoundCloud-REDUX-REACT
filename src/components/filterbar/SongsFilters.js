import React, {Component} from 'react'
import SongsFilter from './SongsFilter'
import TimeContainer from './TimeContainer'

function SongsFilters ({filters}){
  const filtersList = filters.map((filter, index) => (<SongsFilter filters={filter} key={index} />))
  return (
    <div className="songs_filters" id="filters_bar">
      {filtersList}
      <TimeContainer/>
    </div>
  );
};

export default SongsFilters
