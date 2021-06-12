import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";


function Footer4() {
  return (
    <>
      <footer className="footer footer-big">
        <Container>
          <div className="content">
            <Row>
              <Col md="4">
                <div >
                  <img 
                    
                    alt="..."
                    height="60px"
                    className="logo"
                    src={require("assets/img/logo.png")}
                  ></img><h5 className="text-primary"> BUNDLES<span className="text-dark">FINANCE</span></h5>
                </div>
                <br></br>
                <p className="display-7">       
                    Bundles is an innovative DEFI project challenging token holders against each other to own the most $BUND.
                    </p>  

                    <p className="display-7" >

                    ©2021 Bundles Finance
                    </p>
              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Project</h4>
                  <ul>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Prediction Pools
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        NFT Marketplace
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Roadmap
                      </a>
                    </li>
                  </ul>

                  <ul>
    
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        $BUND token
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Info</h4>
                  <ul>
                    <li>
                      <a href="/NFT" onClick={(e) => e.preventDefault()}>
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Partners
                      </a>
                    </li>
                

                  <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        News
                      </a>
                    </li>
             

                  <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Contact
                      </a>
                    </li>
                    </ul>

                </div>
              </Col>
              <Col md="2" xs="6">

              </Col>
              <Col md="2" xs="6">
                <div className="column">
                  <h4 className="mt-3">Useful Links</h4>
                  <div className="btn-wrapper profile text-left mt-3">
                  <Button
                      color=""
                     href=""
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-telegram"></i>
                    </Button>
                    <Button
                      color=""
                      href=""
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-telegram"></i>
                    </Button>



                    <Button
                      color=""
                      href=""
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>


                    <Button
                      color=""
                      href=""
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>

                    <Button
                      color=""
                      href=""
                      size="sm"
                      target="_blank"
                    >
                      <i className="fab fa-medium"></i>
                    </Button>

             
             
                  </div>

                  <div className="btn-wrapper profile text-left mt-3">
                  <img
                  alt="..."
                  src={require("assets/img/cmc.PNG")}
                  width="18%"
                ></img>

<img
                  alt="..."
                  src={require("assets/img/cg.png")}
                  width="16%"
                ></img>

                  </div>

                </div>
              </Col>
            </Row>
            <hr></hr>
           
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer4;
