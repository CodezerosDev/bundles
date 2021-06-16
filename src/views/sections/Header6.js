import React from "react";

import { Button, Container, Row, Col } from "reactstrap";

function Header6() {
  return (
    <>
      <header className="header-5" id="NFTMarketplace">
        <div className="page-header">
          <Container>
            <Row className="align-items-center text-left">
              <Col lg="5" xs="12">
                <p className="display-3">
                  NFT Marketplace
                  <span className="text-primary"></span>
                </p>
                <p className="display-5">
                  Bundles have built a unique NFT Ecosystem where you can use
                  your $BUNDNFT tokens (Earned by staking $BUND / $BUND LP) to
                  purchase unique whitelisted NFT´s from the collections of our
                  featured artists.
                  <br></br>
                  <br></br>
                  <br></br>
                  On the NFT Marketplace allows you not only to buy these unique
                  whitelist Artist NFT´s but also to sell any of your BUND NFTs.
                  It also includes a fixed auction price feature.
                </p>
                <Row className="row-input">
                  <Col sm="12" xs="12">
                    <Button
                      block
                      color="primary"
                      type="submit"
                      href="https://app.bundles.finance/NFT/marketplace "
                    >
                      Visit NFT Marketplace
                    </Button>
                  </Col>
                  {/* <Col sm="6" xs="12">
                    <Button block color="primary" type="submit">
                      NFT Staking
                    </Button>
                  </Col> */}
                </Row>
              </Col>
              <Col className="pl-0" lg="7" xs="12">
                <img
                  alt="..."
                  className="ml-lg-5"
                  src={require("assets/img/Rectangle.jpg")}
                  width="100%"
                ></img>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Header6;
