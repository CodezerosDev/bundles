import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

// Core Components

function Post3() {
  return (
    <>
      <div className="project-2 my-5" id="PredictionPools">
        <Container>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            <Row>
              <Col lg="4" md="6">
                <br></br>
                <br></br>
                <Card className="card-project">
                  <a href="#bund" onClick={(e) => e.preventDefault()}>
                    <div className="icon icon-lg icon-shape icon-shape-primary mx-left">
                      <img
                        alt="..."
                        src={require("assets/img/ICON1B.webp")}
                        width="70%"
                      ></img>
                    </div>
                  </a>
                  <CardBody>
                    <CardTitle className="mt-3 text-black display-4" tag="h5">
                      Low-Risk Bundles
                    </CardTitle>
                    <img
                      alt="..."
                      src={require("assets/img/maxwin.PNG")}
                      width="50%"
                    ></img>
                    <br></br>

                    <span className="card-description display-5 text-black">
                      Stake in our low risk 72 hour pools and earn rewards
                    </span>
                  </CardBody>
                </Card>
              </Col>

              <Col lg="4" md="6">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Card className="card-project">
                  <a href="#bund" onClick={(e) => e.preventDefault()}>
                    <div className="icon icon-lg icon-shape icon-shape-primary mx-left">
                      <img
                        alt="..."
                        src={require("assets/img/ICON1A.webp")}
                        width="70%"
                      ></img>
                    </div>
                  </a>

                  <CardBody>
                    <CardTitle className="mt-3 text-black display-4" tag="h5">
                      High-Risk Bundles
                    </CardTitle>

                    <img
                      alt="..."
                      src={require("assets/img/maxwin2.PNG")}
                      width="45%"
                    ></img>
                    <br></br>

                    <span className="card-description text-black display-5">
                      Higher the risk, higher the rewards. <br></br>48h hour
                      pool to show your skills.
                    </span>
                  </CardBody>
                </Card>
              </Col>

              <Col className="text-left" lg="4">
                <p className="display-3">Prediction Pools</p>
                <h4 className="text-black display-5">
                  Bundles features Staking mechanisms to allow token holders to
                  use their Crypto Prediction Skills to choose which
                  cryptocurrencies will perform the best offer a variety of
                  staking periods.
                  <br></br>
                  <br></br>You can choose between a High and a Low Risk Pool -
                  both with different durations and rewards.
                </h4>

                <br></br>
                <br></br>
                <br></br>

                {/* <Button
                  block
                  color="primary"
                  href="https://www.hardwareluxx.de/media/jphoto/artikel-galerien/test-xfx-radeon-hd-7770-black-edition/xx-hd-7770-black-edition-01-950x631.jpg"
                  target="_blank"
                >
                  Prediction Pools
                </Button> */}
                <br></br>
              </Col>
            </Row>
          </ScrollAnimation>
        </Container>
      </div>
    </>
  );
}

export default Post3;
