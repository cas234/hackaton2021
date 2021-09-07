import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="warning" light expand="md" className="fixed-top">
        <NavbarBrand href="/">Traveling-Safe</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink  className="text-center" href="/components/">Inicio</NavLink>
            </NavItem>
            <NavItem >
              <NavLink   className="text-center" href="https://github.com/reactstrap/reactstrap">Lugares</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-center" href="https://github.com/reactstrap/reactstrap">Guias Turisticos</NavLink>
            </NavItem>
          
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
