import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="bottom">
        <Container>
          <Nav>
            <div className="text-center mt-2">
              <h6 className="text-capitalize mb-2 text-warning">
                T. Kart Inc. 2022 &copy;
              </h6>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
