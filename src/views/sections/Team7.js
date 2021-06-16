import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

// Core Components

function Team7() {
  return (
    <>
      <div id="Team">
        <Container>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            <Row>
              <Col className="mx-auto text-center mb-5" md="8">
                <br></br>

                <p className="display-3">Core Team</p>
                <p className="lead">
                  <br></br>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6">
                <Card className="card-profile">
                  <CardHeader>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded-circle"
                          src={require("assets/img/faces/1.jpg")}
                        ></img>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="text-center">
                      <p className="h5 mt-3 display-5">
                        Simon Lewis
                        <span className="font-weight-light"></span>
                      </p>
                      <div className="font-weight-300">
                        <p className="text-primary">Founder</p>
                      </div>

                      <div className="display-6">
                        Simon Lewis has an extensive background in financial
                        broking and healthcare. Simon served in various senior
                        management positions and he is a co-founder of Elevate
                        Health He holds a BSc in Economics from Loughborough
                        University
                      </div>
                    </div>
                    <div className="card-profile-stats d-flex justify-content-center">
                      {/* <div>
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </div> */}

                      <a
                        href="https://www.linkedin.com/in/simon-lewis-89674b21"
                        target="_blank"
                      >
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-linkedin"></i>
                        </span>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-profile">
                  <CardHeader>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded-circle"
                          src={require("assets/img/faces/2.jpg")}
                        ></img>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="text-center">
                      <p className="h5 mt-3 display-5">
                        Sid Bouziane
                        <span className="font-weight-light"></span>
                      </p>
                      <div className="font-weight-300">
                        <p className="text-primary">Co-Founder</p>
                      </div>

                      <div className="display-6">
                        Sid provides the technical know-how as a specialist in
                        technology and is familiar with overseeing strategy and
                        operations implementation for governments, SMEs, and
                        Startups. Sid worked as a CIO, heading the IT department
                        strategies for several major insurance companies and
                        medical providers. The last 2 years he has provided the
                        technical lead role and manages the development team for
                        Bundles, and co-founded Elevate Health.
                      </div>
                    </div>
                    <div className="card-profile-stats d-flex justify-content-center">
                      {/* <div>
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </div> */}

                      <a
                        href="https://www.linkedin.com/in/sidbouziane"
                        target="_blank"
                      >
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-linkedin"></i>
                        </span>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-profile">
                  <CardHeader>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded-circle"
                          src={require("assets/img/faces/3.jpg")}
                        ></img>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="text-center">
                      <p className="h5 mt-3 display-5">
                        Brenda Gentry
                        <span className="font-weight-light"></span>
                      </p>
                      <div className="font-weight-300">
                        <p className="text-primary">Community Outreach</p>
                      </div>

                      <div className="display-6">
                        AKA Cryptomom is responsible for executing Bund’s
                        marketing campaigns and managing public relations.
                        Cryptomom brings over 15 years of experience in Fintech
                        and Banking. Her knowledge of the digital media sphere,
                        includes managing her own business and leading client
                        relation operations.
                      </div>
                    </div>
                    {/* <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </div>
                      <div>
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-telegram"></i>
                        </span>
                      </div>
                      <div>
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-linkedin"></i>
                        </span>
                      </div>
                    </div> */}
                  </CardBody>
                </Card>
              </Col>

              <Col lg="3" md="6">
                <Card className="card-profile">
                  <CardHeader>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded-circle"
                          src={require("assets/img/faces/4.jpg")}
                        ></img>
                      </a>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0">
                    <div className="text-center">
                      <p className="h5 mt-3 display-5">
                        Crypto Wolf
                        <span className="font-weight-light"></span>
                      </p>
                      <div className="font-weight-300">
                        <p className="text-primary">Consultant & Advisor</p>
                      </div>

                      <div className="display-6">
                        Wolf is a Crypto Enthusiast and has been in the Crypto
                        space since 2019. Since 2020 he started to work as
                        project advisor and community manager for various
                        projects. As one of the earliest BUNDLES supporters, he
                        started to build up the BUND community and managed the
                        Community since than.
                      </div>
                    </div>
                    {/* <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </div>
                      <div>
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-telegram"></i>
                        </span>
                      </div>

                      <div>
                        <span className="heading"></span>
                        <span className="description">
                          <i className="fab fa-linkedin"></i>
                        </span>
                      </div>
                    </div> */}
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

export default Team7;
