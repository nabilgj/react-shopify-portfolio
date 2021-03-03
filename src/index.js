// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

// Common Layout
// import Layout from "./component/common/App";

// Home layout
import Demo from "./page-demo/Demo";

// Dark Home Layout

// Element Layout
import About from "./elements/About";
import Contact from "./elements/Contact";
import Service from "./elements/Service";
// import ServiceDetails from "./elements/ServiceDetails";

import error404 from "./elements/error404";

// Blocks Layout
// import Team from "./blocks/Team";
// import Portfolio from "./blocks/Portfolio";
// import Gallery from "./blocks/Gallery";

import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo} />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            component={About}
          />

          {/* Element Layot */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service`}
            component={Service}
          />

          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details`}
            component={ServiceDetails}
          /> */}

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />

          {/* Blocks Elements  */}
          {/* 
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/team`}
            component={Team}
          /> */}

          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/testimonial`}
            component={Testimonial}
          /> */}

          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio`}
            component={Portfolio}
          /> */}

          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/gallery`}
            component={Gallery}
          /> */}

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-form`}
            component={ContactForm}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/google-map`}
            component={GoogleMap}
          />

          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
