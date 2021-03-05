import React, { Component } from "react";

import { Link } from "react-router-dom";

class About extends Component {
  render() {
    let title = "About",
      description =
        "Web Developer with over 1 year of experience in designing and creating highly interactive and dynamic user interfaces with React, Redux, Material-UI & Firebase";

    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/about-2.jpg"
                    alt="About Images"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">React Developer</h3>
                        <p>
                          Over 1 year of experience with React, Redux & Material
                          UI
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Shopify Developer</h3>
                        <p>Design & Customize Shopify stores for clients</p>
                      </div>
                    </div>

                    <div
                      className="portfolio-button"
                      style={{ marginTop: "3rem" }}
                    >
                      <Link className="rn-btn" to="/about">
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
