import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
const NavBar = () => {
  return (
    <div>
      <div>
        
        <Navbar className="Nav" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Market Cart</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Home
      </NavItem>
              <NavItem eventKey={2} href="#">
                Items
      </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Bill
      </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export { NavBar };

