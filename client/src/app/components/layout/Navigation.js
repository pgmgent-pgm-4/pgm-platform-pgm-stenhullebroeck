import { Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavbarText, Nav, NavItem, NavLink } from 'reactstrap';
import { UserContextNavigation } from '../auth';
import ThemeToggle from '../theme';
import { useThemeContext } from '../../context/theme.context';

const routes = [
  {
    title: 'Opleiding',
    type: 'internal',
    path: '/education',
  },
  {
    title: 'Programma',
    type: 'internal',
    path: '/programma',
  },
  {
    title: 'Portfolio',
    type: 'internal',
    path: '/projects',
  },
  {
    title: 'Blog',
    type: 'internal',
    path: '/blogs',
  },
  {
    title: 'Diensten',
    type: 'internal',
    path: '/services',
  },
  {
    title: 'Teams',
    type: 'internal',
    path: '/teams',
  },
];

const Navigation = () => {
  const { isDarkMode, handleThemeChange } = useThemeContext();
  return (
    <>
      <Nav
        className={`me-auto ${isDarkMode ? 'bg-dark navbar-dark' : ''}`}
        navbar
      >
        {routes &&
          routes.map((route) => (
            <NavItem key={route.path}>
              <NavLink tag={RRNavLink} to={route.path}>
                {route.title}
              </NavLink>
            </NavItem>
          ))}
      </Nav>
      <Nav>
        <ThemeToggle />
        <UserContextNavigation />
      </Nav>
    </>
  );
};

export default Navigation;
