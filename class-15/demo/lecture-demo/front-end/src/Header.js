import React from 'react';
import { Col, Container, Navbar, NavItem, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './Login';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Container>
          <Row>
            <Col><NavItem><Link to="/" className="nav-link">Home</Link></NavItem></Col>
            <Col><NavItem><Link to="/about" className="nav-link">About</Link></NavItem></Col>
            <Col><NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem></Col>

            {/* Conditionally rendering the logout or logout button based on if the user has logged in yet */}
            {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}

          </Row>
        </Container>
      </Navbar>
    )
  }
}

// Wrapping class withAuth0 gives us auth0 in props
export default withAuth0(Header);
