import { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import logo from "../assets/logo.svg";
import ConfigureUrl from "./ConfigureUrl";

const Header = ({url, connectionStatus}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 40,
            }}
          />
          <span>Connection Status: {connectionStatus} <ConfigureUrl url={url} /></span>
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Configure URL</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/components/">Configure Topics</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default Header;
