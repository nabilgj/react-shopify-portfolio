import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class About extends Component {
  render() {
    let title = "About Myself",
      description =
        "I am a Toronto based Web Developer. I have completed a 58 weeks Diploma in Web Application Developer with JavaScript as core. I've got hands on experience working with 3 different companies in the Greater Toronto Area ";

    return (
      <React.Fragment>
        <PageHelmet pageTitle="About Me" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Myself"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-5.jpg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">React Developer</h3>
                          <p>
                            Over 1 year of experience with React, Redux &
                            Material UI
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
                        <a
                          className="rn-btn"
                          href="./NabilResume.pdf"
                          target="_blank"
                        >
                          Check Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">
                  Looking for Web Developer for your business?
                </h4>
                <p>
                  I have been working with different clients for designing and
                  developing their websites using React, Redux, Material UI &
                  Firebase.
                </p>
                <a className="rn-btn btn-white" href="/contact">
                  Lets Talk
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img
                  src="/assets/images/about/finding-us-01.png"
                  alt="Finding Images"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25">
                  <h2 className="title">Projects</h2>
                  <p>
                    I have done couples of projects for different clients and I
                    would like to showcase them for your reference
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-05.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Tech GIS</h4>
                    <p className="designation">React SPA</p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-06.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title"> Arc Develpment</h4>
                    <p className="designation">React Material UI</p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-07.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Shopify Store</h4>
                    <p className="designation">In progress</p>
                  </div>
                </div>
              </div>
              {/* End Single Team  */}
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Brand Area */}
        {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default About;