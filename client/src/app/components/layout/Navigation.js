import { Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavbarText, Nav, NavItem, NavLink } from 'reactstrap';
import { UserContextNavigation } from '../auth';
import ThemeToggle from '../theme';
import { useThemeContext } from '../../context/theme.context';

const routes = [
  {
    title: 'Projects',
    type: 'internal',
    path: '/projects',
  },
  {
    title: 'Blog',
    type: 'internal',
    path: '/blogs',
  },
  {
    title: 'Programma',
    type: 'internal',
    path: '/programma',
  },
  {
    title: 'Docenten',
    type: 'internal',
    path: '/communities',
  },
  {
    title: 'Teams',
    type: 'internal',
    path: '/teams',
  },
  {
    title: 'Contact',
    type: 'internal',
    path: '/contact',
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
