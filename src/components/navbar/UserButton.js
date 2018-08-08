import React, {Component} from 'react'
import UserTrigger from './UserTrigger'

class UserButton extends Component {


  render() {
    return (
      <div className="user_button">
        <UserTrigger/>
      </div>
    );
  };
};

export default UserButton
