import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import logo from 'assets/img/logo.png';

// Core Components

function NavbarPrimary() {
  const [collapseOpen, toggleCollapseOpen] = React.useState(false);
  return (
    <>
      <Navbar className="navbar-transparent" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>            
          <img
          width="auto"
          height="auto"
          src={logo}
/>
           

          </NavbarBrand>
          <h5 className="text-primary"> BUNDLES<span className="text-white">FINANCE</span></h5>
          <button
            className="navbar-toggler"
            onClick={() => toggleCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse isOpen={collapseOpen} navbar>
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/index">
                    <img
                      
                      alt="..."
                      src={require("assets/img/logo.png")}

                    ></img>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    onClick={() => toggleCollapseOpen(!collapseOpen)}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-lg-auto" navbar>

              <NavItem>

              </NavItem>
              <NavItem>
                <NavLink>

                </NavLink>

                </NavItem>
                <NavItem>
                <NavItem>

                </NavItem>
                </NavItem>
            <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Prediction Pools <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  NFT Marketplace <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Staking <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Roadmap <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  Tokenomics <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#Team7" onClick={(e) => e.preventDefault()}>
                  Team <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>


           
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPrimary;
