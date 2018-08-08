import React, {Component} from 'react'
import SongsFilters from './SongsFilters'

class SongsFiltersContainer extends Component {


  render() {
    return (
      <div className="songs_filters_container">
          <SongsFilters filters={this.props.filters}/>
      </div>
    );
  };
};

export default SongsFiltersContainer
