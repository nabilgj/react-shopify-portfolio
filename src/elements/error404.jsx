import React, { Component } from "react";

import Header from "../component/header/Header";

class error404 extends Component {
  render() {
    return (
      <>
        <Header
          headerPosition="header--transparent"
          color="color-white"
          logo="logo-light"
        />
        {/* Start Page Error  */}
        <div className="error-page-inner bg_color--4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h1 className="title theme-gradient">404!</h1>
                  <h3 className="sub-title">Page not found</h3>
                  <div className="error-button">
                    <a
                      className="rn-button-style--2 btn-solid"
                      href="/"
                      style={{ marginTop: "3rem" }}
                    >
                      Back To Homepage
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Error  */}
      </>
    );
  }
}
export default error404;
