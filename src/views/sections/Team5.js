import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

import ScrollAnimation from 'react-animate-on-scroll'


// Core Components

function Team5() {
  return (
    <>
      <div className="team-5">
        <Container>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <Row>
            <Col className="mx-auto text-center mb-5" md="8">
              <p className="display-3">Featured Artists</p>
              <p className="lead">

              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-profile">
                <CardHeader

                >
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded-circle"
                        src={require("assets/img/faces/Bran.PNG")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <div className="text-center">
                    <h5 className="h5 mt-3 display-4">
                      Bran Symondson
                      <span className="font-weight-light"></span>
                    </h5>
                    <div className="font-weight-300">
                      <i className="ni location_pin mr-2"></i>
                      California
                    </div>
                  </div>
                  <div className="card-profile-stats d-flex justify-content-center">
                  <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-twitter"></i></span>
                    </div>

                    <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-dribbble"></i></span>
                    </div>
                    <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-linkedin"></i></span>
                    </div>
                  </div>
                
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-profile" data-background="cover">
                
                <CardHeader>
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded-circle"
                        src={require("assets/img/faces/Ameer.PNG")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <div className="text-center">
                    <h5 className="h5 mt-3 display-4">
                      Ameer Carter
                      <span className="font-weight-light"></span>
                    </h5>
                    <div className="font-weight-300">
                      <i className="ni location_pin mr-2"></i>
                      California
                    </div>
                  </div>
                  <div className="card-profile-stats d-flex justify-content-center">
                  <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-twitter"></i></span>
                    </div>

                    <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-dribbble"></i></span>
                    </div>
                    <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-linkedin"></i></span>
                    </div>
                  </div>
                
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-profile">
                <CardHeader
                
                >
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded-circle"
                        src={require("assets/img/faces/Danny.PNG")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <div className="text-center">
                    <h5 className="h5 mt-3 display-4">
                      Danny Sanzone
                      <span className="font-weight-light"></span>
                    </h5>
                    <div className="font-weight-300">
                      <i className="ni location_pin mr-2"></i>
                      California
                    </div>
                  </div>
                  <div className="card-profile-stats d-flex justify-content-center">
                  <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-twitter"></i></span>
                    </div>

                    <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-dribbble"></i></span>
                    </div>
                    <div>
                      <span className="heading"></span>
                      <span className="description"><i className="fab fa-linkedin"></i></span>
                    </div>
                  </div>
                
                </CardBody>
              </Card>
            </Col>
          </Row>
          </ScrollAnimation>
        </Container>
      </div>
    </>
  );
}

export default Team5;
