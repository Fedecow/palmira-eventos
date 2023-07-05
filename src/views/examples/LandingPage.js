import React from "react";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Main from 'components/Main/Main'

//Donde se ven los componentes mas importantes de la pag
function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <Main />
      <DemoFooter />
    </>
  );
}

export default LandingPage;
