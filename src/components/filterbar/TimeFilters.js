import React, {Component} from 'react'

class TimeFilters extends Component {


  render() {
    return (
      <div className="time_filters">
        <i class="fas fa-filter"></i>
        <a class="songs-header__time " href="#" title="">7 days</a>
        <a class="songs-header__time " href="#" title="">30 days</a>
        <a class="songs-header__time " href="#" title="">90 days</a>
     </div>
    );
  };
};

export default TimeFilters
