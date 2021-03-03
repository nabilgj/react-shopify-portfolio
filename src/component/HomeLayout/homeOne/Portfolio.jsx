import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";

const PortfolioList = [
  {
    image: "image-1",
    category: "Projects",
    title: "Website Development",
    imgUrl: "/service",
  },
  {
    image: "image-2",
    category: "Projects",
    title: "React SPA",
    imgUrl: "https://www.tech-gis.com",
  },
  {
    image: "image-3",
    category: "Projects",
    title: "React with Redux & Material UI",
    imgUrl: "https://arc-development.netlify.app/",
  },
  {
    image: "image-4",
    category: "Projects",
    title: "Shopify Store",
    imgUrl: "#in-progress",
  },
];

const settings = {
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
};

class Portfolio extends Component {
  render() {
    let title = "Projects",
      description =
        "Here are some of the projects that I did for my clients and one of the project Arc Development is from udemy learning.";
    return (
      <React.Fragment>
        <div className="portfolio-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-slick-activation mt--70 mt_sm--40">
            <Slider {...portfolioSlick2} {...settings}>
              {PortfolioList.map((value, index) => (
                <div className="portfolio" key={index}>
                  <div className="thumbnail-inner">
                    <div className={`thumbnail ${value.image}`}></div>
                    <div className={`bg-blr-image ${value.image}`}></div>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p>{value.category}</p>
                      <h4>
                        <a href={`${value.imgUrl}`} target="_blank">
                          {value.title}
                        </a>
                      </h4>
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
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
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Portfolio;
