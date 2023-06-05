import { Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavbarText, Nav, NavItem, NavLink } from 'reactstrap';
import { UserContextNavigation } from '../auth';

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
    title: 'Communities',
    type: 'internal',
    path: '/communities',
  },
  {
    title: 'Posts',
    type: 'internal',
    path: '/posts',
  },
  {
    title: 'Contact',
    type: 'internal',
    path: '/contact',
  },
];

const Navigation = () => {
  return (
    <>
      <Nav className="me-auto" navbar>
        <button
          onClick={function darkMode() {
            const body = document.body;
            const element = document.body.getElementsByClassName('navbar')[0];
            body.classList.toggle('dark-mode');
            element.classList.toggle('bg-dark');
            element.classList.toggle('navbar-dark');
          }}
        >
          Dark Mode
        </button>
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
        <UserContextNavigation />
      </Nav>
    </>
  );
};

export default Navigation;
