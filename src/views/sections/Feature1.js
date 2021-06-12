import React from "react";

// reactstrap components
import { Badge, Container, Row, Col, CardBody, CardTitle, Card } from "reactstrap";
import ScrollAnimation from 'react-animate-on-scroll'

// Core Components

function Feature1() {
  return (
    <>
      <div className="section features-1">
        <Container>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <Row>
            <Col className="mx-auto text-center" md="8">
              <Badge className="mb-3" color="primary" pill>
              </Badge>
              <p className="display-3">Bund Staking-NFT</p>
              <span className="lead display-5">
              Bundles allows user to stake their $BUND to earn either more $BUND or $BUNDNFT tokens, that can be used on the marketplace.               </span>
            </Col>
          </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <Row>
          <Col lg="4" md="6" >
              <br></br>
              <br></br>
                <Card className="card-project">
                  <a href="#bund" onClick={(e) => e.preventDefault()}>
                    <div className="icon icon-lg icon-shape icon-shape-primary mx-left">
                    <img
                  alt="..."
                  src={require("assets/img/ICON1E.webp")}
                  width="70%"
                ></img>
                    </div>
                  </a>
                  <CardBody>
                    <CardTitle className="mt-3 text-black display-4" tag="h5">
                    Bund Staking-NFT                  </CardTitle>
                    <p className="card-description text-black display-5">
                    Earn BUNDNFT by depositing BUND to the Liquidity pool                  </p>
   
                  </CardBody>
                </Card>

              </Col>
            <Col lg="5" md="6" >
              <br></br>
              <br></br>
                <Card className="card-project">
                  <a href="#bund" onClick={(e) => e.preventDefault()}>
                    <div className="icon icon-lg icon-shape icon-shape-primary mx-left">
                    <img
                  alt="..."
                  src={require("assets/img/ICON1D.webp")}
                  width="70%"
                ></img>
                    </div>
                  </a>
                  <CardBody>
                    <CardTitle className="mt-3 text-black display-4" tag="h5">
                    Bund-ETH LP Staking-NFT   
                  </CardTitle>
                    <p className="card-description text-black display-5">
                    Earn BUNDNFT by depositing BUND-ETH LP <br></br>to the Liquidity pool                   </p>
   
                  </CardBody>
                </Card>

              </Col>
            <Col lg="3" md="6" >
            <br></br>
              <br></br>
                    <img
                  alt="..."
                  src={require("assets/img/hr1.PNG")}
                  width="105%"
                ></img>
             
              </Col>
          </Row>
          </ScrollAnimation>
        </Container>
      </div>
    </>
  );
}

export default Feature1;
