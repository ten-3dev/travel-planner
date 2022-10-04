import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';

  const Navbar = () => {
    return (
      <>
        <Nav>
          
    
          <NavMenu>
            <NavLink to="/myComments" activeStyle>
            MyComments
            </NavLink>
            <NavLink to='/events' activeStyle>
              Events
            </NavLink>
            <NavLink to='/annual' activeStyle>
              Annual Report
            </NavLink>
            <NavLink to='/team' activeStyle>
              Teams
            </NavLink>
            <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
          </NavMenu>
          
        </Nav>
      </>
    );
  };
    
  export default Navbar;