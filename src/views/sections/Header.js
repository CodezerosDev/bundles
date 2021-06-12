import React from "react";
import {
  Button,

  Container,
  Row,
  Col,
} from "reactstrap";


function Header() {
  return (
    <>
    
    <header className="header-4 ">
        <div className="header-wrapper">
        <div className="page-header header-video">
            <div className=""></div>
            <video
              autoPlay="autoPlay"
              loop="loop"
              muted="muted"
              playsInline="playsInline"
            >
              <source
                src={require("assets/videos/bundle.mp4")}
                type="video/mp4"
              ></source>
            </video>
            
            <Container className="text-center">

              <Row>
                <Col className="mx-auto" lg="7">
       {/*           <h4 className="video-text">bundles finance</h4>   */}
                  <h1 className="display-3 text-white">Use crypto-prediction skills</h1>
                 <h1 className="text-primary"> Earn APY. </h1>
                 <div className="space-100"></div>
                  <Button
                    outline
                    className="btn-round mt-3 mb-sm-0 pulse"
                    color="primary"
                    href="/low-risk"
                  >
                    <span className="btn-inner--icon">
                    </span>
                    
                    <span className="btn-inner--text">Launch App</span>

                    
                  </Button>
                  <Button
                    outline
                    className="btn-round mt-3 mb-sm-0 pulse"
                    color="primary"
                    href="/low-risk"
                  >
                    <span className="btn-inner--icon">
                    </span>
                    
                    <span className="btn-inner--text">Marketplace</span>

                    
                  </Button>
                 
                </Col>
                
              </Row>


  
            </Container>
          </div>
          </div>
          </header>
        

    
   
    </>
  );
}

export default Header;
