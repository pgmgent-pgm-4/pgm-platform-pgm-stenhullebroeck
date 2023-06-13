import React from 'react';
import { Link } from 'react-router-dom';
// import footer from reactstrap
import { Container, Row, Col } from 'reactstrap';
import { Button, NavItem, NavLink, Nav, UncontrolledTooltip } from 'reactstrap';
import { useThemeContext } from '../../context/theme.context';

const Footer = () => {
  const { isDarkMode, handleThemeChange } = useThemeContext();
  return (
    <footer className="dark footer">
      <Container>
        <Row className="row-grid align-items-center mb-5">
          <Col lg="6">
            <Row>heheh</Row>
          </Col>
        </Row>
        <hr />
        <Row className=" align-items-center justify-content-md-between">
          <Col md="6">
            <div className=" copyright">
              © {new Date().getFullYear()} PGM-Platform
            </div>
          </Col>
          <Col md="6">
            <Nav className=" nav-footer justify-content-end">
              <NavItem>
                <NavLink
                  href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                  target="_blank"
                >
                  MIT License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <Row>
          <p className="mt-4 text-muted">
            Gemaakt als opdracht voor Programming 4 door Sten Hullebroeck
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
