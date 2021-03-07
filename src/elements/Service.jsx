import React, { Component } from "react";

import { Link } from "react-router-dom";

import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const ServiceList = [
  {
    icon: <FiLayers />,
    title: "Website Design",
    description: "Cand design & develop amazingly interactive websites",
    connect: "Email or call for a qoute",
  },
  {
    icon: <FiUsers />,
    title: "React SPA",
    description: "Can transform designs into React SPA",
    connect: "Email or call for a qoute",
  },
  {
    icon: <FiMonitor />,
    title: "React MPA",
    description:
      "Can create a dynamic website where data can come from external sources",
    connect: "Email or call for a qoute",
  },
  {
    icon: <FiCast />,
    title: "Basic Shopify Store",
    description:
      "Can deisgn and manage your Shopify store upto 5 pages with 5 products",
    connect: "Email or call for a qoute",
  },
  {
    icon: <FiCast />,
    title: "Premium Shopify Store",
    description:
      "Can deisgn and manage your Shopify store upto 10 pages with 10 products including customer and order management, as well as SEO, analytics and media marketing ",
    connect: "Email or call for a qoute",
  },
];
class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Service" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Services"} />
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Web & App</h2>
                  <p>
                    Your presence on the web is essential <br /> If you’re not
                    there, people can’t find you and they won't know you exist
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <Link to="/contact">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                        <p>{val.connect}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Service Area */}
        {/* <div className="service-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Website for your business</h2>
                  <p>
                    If you are looking for a website for your business, <br />
                    I can design and develop a single/multi-page website using
                    JavsScript & React <br />
                  </p>

                  <div className="portfolio-button">
                    <Link className="rn-btn" to="/contact">
                      Send Inquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Service Area */}

        {/* Start Service Area */}
        {/* <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>E-commerce Store</h2>
                  <p>
                    If you run a retail shop or are looking to start an
                    E-commerce store for your business, <br />
                    don't worry I've got you covered with the most powerful
                    E-commerce tool (Shopify), including product, customer &
                    order management
                  </p>

                  <Link className="rn-btn" to="/contact">
                    Send Inquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Service Area */}

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
export default Service;
