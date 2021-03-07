import React, { Component, Fragment } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";

import About from "../component/HomeLayout/homeOne/About";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";

import Helmet from "../component/common/Helmet";

class Demo extends Component {
  render() {
    const PostList = BlogContent.slice(0, 3);

    return (
      <Fragment>
        <Helmet pageTitle="Home Page" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          <SliderOne />
        </div>
        {/* End Slider Area   */}

        {/* Start About Area */}
        <div className="about-area about-position-top pb--120">
          <About />
        </div>
        {/* End About Area */}

        <div className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>

        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner mb--55">
            <Portfolio />
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start recent updates Area */}
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h2>Recent Updates</h2>
                  <p>
                    I have started creating amazingly powerful E-commerce stores
                    using Shopify. Check out some of the stores I am currently
                    working on
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                  <a className="btn-transparent rn-btn-dark" href="/service">
                    <span className="text">View All Services</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="row mt--60 mt_sm--40">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href={`${value.imgUrl}`} target="_blank">
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.jpg`}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href={`${value.imgUrl}`} target="_blank">
                          {value.title}
                        </a>
                      </h4>
                      <div className="blog-btn">
                        <a
                          className="rn-btn text-white"
                          href={`${value.imgUrl}`}
                          target="_blank"
                        >
                          Check Inside
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End recent updates Area */}

        {/* Start Brand Area */}
        <div className="rn-brand-area brand-separation bg_color--5 pb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div style={{ textAlign: "center", margin: "5rem auto" }}>
                  <h3 style={{ fontSize: "2.5rem" }}>
                    We are in The Globalisation of A Digital Age
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </Fragment>
    );
  }
}

// into indexjs
export default Demo;
