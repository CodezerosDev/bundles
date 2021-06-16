import React from "react";
import Header from "./sections/Header.js";
import Post3 from "./sections/Post3a.js";
import NavbarPrimary from "components/navbars/NavbarPrimary.js";
import { Roadmap } from "./sections/Roadmap.js";
import Header5 from "./sections/Header5.js";
import Feature1 from "./sections/Feature1.js";
import Header6 from "./sections/Header6.js";
import Team5 from "./sections/Team5.js";
import Feature0 from "./sections/Feature0.js";
import Team7 from "./sections/Team7.js";
import Pricing from "./sections/Pricing.js";
import Footer4 from "./sections/Footer4.js";
// import { Element } from 'react-scroll'

export default function LandingPage() {
  return (
    <>
      <div className="wrapper">
        <NavbarPrimary />
        <Header />
        <Header5 />
        {/*  <Header /> */}
        <div className="main">
          <Post3 />
          <div className="space-100"></div>
          <Feature1 />
          <Header6 />
          <Team5 />
          <Roadmap />

          <Feature0 />
          <div className="space-100"></div>
          <Team7 />
          <div className="space-100"></div>
          <Pricing />

          <Footer4 id="Footer" />
        </div>
      </div>
    </>
  );
}
