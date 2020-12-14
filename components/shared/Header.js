import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link">{title}</a>
    </Link>
  )
}

class Header extends React.Component {

  state = { isOpen: false }
  toggle = () => this.setState({isOpen: !this.state.isOpen})

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Siddharth Saxena</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <BsNavLink route="/" title="Home"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/about" title="About"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/projects" title="Project"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/blog" title="Blog"/>
              </NavItem>
              <NavItem>
                <BsNavLink route="/resume" title="Resume"/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;