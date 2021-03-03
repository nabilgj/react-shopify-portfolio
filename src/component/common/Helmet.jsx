import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} || React & Shopify Developer </title>
          <meta
            name="description"
            content="Toronto base Front End Developer. I design and develop highly advance and responsive Web Applications using HTML, CSS, JavaScript, React, Redux, Material UI & Firebase and Shopify for E-commerce "
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

// into every page for SEO
export default PageHelmet;
