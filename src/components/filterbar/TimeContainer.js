import React, {Component} from 'react'
import SongsFilter from './SongsFilter'
import TimeFilters from './TimeFilters'

class TimeContainer extends Component {


  render() {
    return (
      <div className="time_container">
            <TimeFilters/>
      </div>
    );
  };
};

export default TimeContainer
