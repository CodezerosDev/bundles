import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import ScrollAnimation from 'react-animate-on-scroll'


function Feature0() {
  return (
    <>
      <div className="section features-0">
        <Container>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce>
          <Row>
            <Col className="mx-auto text-center" md="10">
              <Col >
<h1 className="text-primary"> $BUND <span className="text-dark">TOKEN</span></h1>
  

              </Col>
              <Col></Col>
              <p className="lead">
              <br></br>
              <br></br>
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div >
                <div >                 
                </div>
 
                <Col>
 
                <p className="info-title text-black display-5">
                 Initial Supply
                </p>
 
                <p className="info-title text-black display-5"> 
                Circulating Supply
                </p>
                
                <p className="info-title text-black display-5">
                Token Burnt
                </p>

                <p className="info-title text-black display-5">
                Locked Team Tokens
                </p>

                <p></p>
                <br></br>
                <br></br>
                <br></br>

                <Button block >Token Burn Address</Button>
                <br></br>
               
                <br></br>
                <br></br>
                <img
                  alt="..."
                  src={require("assets/img/audit.PNG")}
                  width="70%"
                ></img>

                <br></br>
                <br></br>

               <Button block > Audit V1 </Button>

                </Col>
 
              </div>
 
            </Col>
            <Col md="4">
              <div >
                <div >
                 
                </div >
                <Col >
                <p className="info-title text-black display-5">
                 100,000
                </p>
                <p className="info-title text-black display-5">
                 86,482
                </p>
                

                <p className="info-title text-black display-5">
                 2,880
                </p>

                <p className="info-title text-black display-5">
                9,970 (until Oct. `21)
                </p>

                <p className="info-title text-black display-5">
                </p>
                <br></br>
                <br></br>
                <br></br>

                <Button block >Locked Team Tokens</Button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               <Button block >Audit V2</Button>

                </Col>
                
              </div>
           
            </Col>



            <Col md="4">
              <div className="info">
      
                <img
                  alt="..."
                  src={require("assets/img/RSK3.PNG")}
                  width="100%"
                ></img>
                <Button block color="primary">BUY $BUND</Button>
                <Button block>BUY $BUND-LP</Button>


              </div>

              <div className="info">
  
                <img
                  alt="..."
                  src={require("assets/img/UNI3.PNG")}
                  width="100%"
                ></img>
                <Button block color="primary">BUY $BUND</Button>
                <Button block>BUY $BUND-LP  </Button>


              </div>
            </Col>




          </Row>
          </ScrollAnimation>
        </Container>
      </div>
    </>
  );
}

export default Feature0;
