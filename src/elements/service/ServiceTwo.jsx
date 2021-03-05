import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

import { Link } from "react-router-dom";

const ServiceList = [
  {
    icon: <FiLayers />,
    title: "Static Website",
    description: "React SPA",
  },
  {
    icon: <FiUsers />,
    title: "React Apps",
    description: "React apps supported with redux and routing",
  },
  {
    icon: <FiUsers />,
    title: "React, Redux & Material UI",
    description: "React apps supported with Redux, Router & Material UI",
  },
  {
    icon: <FiMonitor />,
    title: "Shopify Store",
    description: "Design & Develop Shopify Stores",
  },
];

class ServiceTwo extends Component {
  render() {
    let title = "Services",
      description =
        "I make highly advance and responsive React SPA and shopify stores";

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              <div className="service-btn">
                <Link className="btn-transparent rn-btn-dark" to="/contact">
                  <span className="text">Lets connect</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                  <Link to="/service">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
