/*eslint-disable*/
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// reactstrap components
import { Container, Row, Col } from "reactstrap";


// Core Components

function Pricing() {
  return (
    <>
      <div className="section section-pricing" id="sectionBuy">
        <Container>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>

        <Row className="mt-5" id="pricing">
            <Col className="mx-auto text-center mt-5" md="8">
              <h2 className="title">
                <span className="text-dark display-3 ">Partners</span>
              </h2>
            </Col>

          </Row>
<br></br>
<br></br>
          <Row className="our-clients">

          <Col lg="3" md="6" xs="6">
          </Col>

            <Col lg="3" md="6" xs="6">
              <img
              height="40%"
                alt="..."
                src={require("assets/img/RSKX.webp")}
              ></img>
            </Col>
            <Col lg="3" md="6" xs="6">
              <img
                alt="..."
                height="40%"
                src={require("assets/img/JFX.jpg")}
              ></img>
            </Col>
           
          </Row>
        </ScrollAnimation>
        </Container>
      </div>
    </>
  );
}

export default Pricing;
