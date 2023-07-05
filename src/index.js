import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// pages
import LandingPage from "views/examples/LandingPage.js";

// others
import { AppContextprovider } from './components/Context/AppContext'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppContextprovider>
    <BrowserRouter>
      <Route path="/" render={(props) => <LandingPage {...props} />}/>
    </BrowserRouter>
  </AppContextprovider>
);
