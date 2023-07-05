/*import AOS */

import React from "react";

// reactstrap components
import {Container } from "reactstrap";

// core components
function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/palmira-2.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1 data-aos="fade-right" data-aos-duration="2000" >Palmira Casa de Eventos</h1>
            <h3 data-aos="fade-left" data-aos-duration="2000">"Sumérgete en la belleza de nuestros ambientes <br></br> Un salón de eventos que te sorprenderá"</h3>
          </div>
        </Container>
      </div>
    </>
  );
}


export default LandingPageHeader;


