import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { useThemeContext } from '../../context/theme.context';

// Custom components
import Navigation from './Navigation';

const Header = () => {
  const { isDarkMode, handleThemeChange } = useThemeContext();
  return (
    <header className="header">
      <Navbar
        expand="md"
        className={`navbar ${
          isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'
        }`}
      >
        <NavbarBrand tag={RRNavLink} to="/home">
          PGM Platform
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Navigation />
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
