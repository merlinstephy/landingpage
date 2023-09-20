import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        
          <img src={require('../../images/nissan.jpg')} alt='logo' style={{ height : '50px', width : '50px', padding : '15px'}} />
        
        <Bars />
        <NavMenu style={{ textAlign : 'center'}}>
        <NavLink to='/index' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/about' activeStyle>
            COMPANY
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            REGISTRATION
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            LOGIN
          </NavLink>
         
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;