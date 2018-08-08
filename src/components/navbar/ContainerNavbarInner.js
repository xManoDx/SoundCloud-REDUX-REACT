import React, {Component} from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarFreesection from './NavbarFreesection'
import NavbarSearchbar from './NavbarSearchbar'
import NavbarUserbar from './NavbarUserbar'

class ContainerNavbarInner extends Component {


  render() {
    return (
      <div className="container navbar_inner">

        <NavbarLogo/>
        <NavbarFreesection/>
        <NavbarSearchbar/>
        <NavbarUserbar/>

      </div>
    );
  };
};

export default ContainerNavbarInner
