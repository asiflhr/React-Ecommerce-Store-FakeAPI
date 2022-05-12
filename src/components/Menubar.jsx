import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from '../static/img/logo.png'


const Menubar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className='navbar'>
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt='logo' className='navbar-brand'/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/" className='navlink'>Home</Nav.Link>
              <Nav.Link href="/products" className='navlink'>Products</Nav.Link>
              <Nav.Link href="/contact-us" className='navlink'>Contact Us</Nav.Link>
              <Nav.Link href="/about" className='navlink'>About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menubar