import React, { useEffect, useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
import logo from "assets/img/logo.png";
// Core Components

function NavbarPrimary() {
  const [collapseOpen, toggleCollapseOpen] = React.useState(false);
  const location = useLocation();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });
  return (
    <>
      {scroll && (
        <div
          id="scrolltop"
          className="scrolltop"
          onClick={() => window.scroll(0, 0)}
        >
          <i class="fas fa-arrow-circle-up"></i>
        </div>
      )}
      <Navbar className="navbar-transparent" expand="lg">
        <Container>
          <NavbarBrand href="/">
            <img width="auto" height="auto" alt="logo" src={logo} />
          </NavbarBrand>
          <h5 className="text-primary">
            {" "}
            BUNDLES<span className="text-white">FINANCE</span>
          </h5>
          <button
            className="navbar-toggler"
            onClick={() => toggleCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Collapse
            isOpen={collapseOpen}
            navbar
            className="justify-content-end"
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img alt="..." src={require("assets/img/logo.png")} />
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
                <NavLink
                  href="#PredictionPools"
                  className={
                    location.hash === "#PredictionPools" ? "active" : ""
                  }
                  onClick={() => toggleCollapseOpen(false)}
                >
                  Prediction Pools
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#Staking"
                  className={location.hash === "#Staking" ? "active" : ""}
                  onClick={() => toggleCollapseOpen(false)}
                >
                  Staking
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#NFTMarketplace"
                  className={
                    location.hash === "#NFTMarketplace" ? "active" : ""
                  }
                  onClick={() => toggleCollapseOpen(false)}
                >
                  NFT Marketplace
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#Roadmap"
                  className={location.hash === "#Roadmap" ? "active" : ""}
                  onClick={() => toggleCollapseOpen(false)}
                >
                  Roadmap
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#Tokenomics"
                  className={location.hash === "#Tokenomics" ? "active" : ""}
                  onClick={() => toggleCollapseOpen(false)}
                >
                  Tokenomics
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="#Team"
                  className={location.hash === "#Team" ? "active" : ""}
                  onClick={() => toggleCollapseOpen(false)}
                >
                  Team
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
