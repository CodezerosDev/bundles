import React from "react";

import { Button, Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

function Header5() {
  return (
    <>
      <header className="header-5">
        <div className="page-header">
          <Container>
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <Row className="align-items-center text-left">
                <Col lg="6" xs="12">
                  <p className="mt-3 text-black display-3" tag="h5">
                    Use crypto-prediction skills
                    <span className="display-13">Earn APY.</span>
                  </p>
                  <h1 className=" display-5">
                    Join our Prediction Pools and compete against users to{" "}
                    <br></br>
                    earn as much as
                    <span className="display-5 text-primary"> 39.6% </span>over
                    48 hours in returns.{" "}
                  </h1>

                  <Row className="row-input">
                    <Col sm="6" xs="12">
                      <Button
                        block
                        color="primary"
                        type="submit"
                        href="https://bundles.finance/index"
                      >
                        Launch App ETH
                        <img
                          alt="..."
                          className="ml-lg-5"
                          src={require("assets/img/ETH_ICON.webp")}
                          width="5%"
                        ></img>
                      </Button>
                    </Col>
                    <Col sm="6" xs="12">
                      <Button
                        block
                        color="primary"
                        type="submit"
                        href="https://bundles.finance/rsk-index "
                      >
                        Launch App RSK
                        <img
                          alt="..."
                          className="ml-lg-5"
                          src={require("assets/img/RSK_ICON.webp")}
                          width="7%"
                        ></img>
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col className="pl-0" lg="6" xs="12">
                  <img
                    alt="..."
                    className="ml-lg-5"
                    src={require("assets/img/DECO.webp")}
                    width="100%"
                  ></img>
                </Col>
              </Row>
            </ScrollAnimation>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header5;
