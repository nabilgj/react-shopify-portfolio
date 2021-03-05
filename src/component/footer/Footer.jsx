import React, { Component } from "react";

import { Link } from "react-router-dom";

import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/nabil-ahmed-03377615a/",
  },
  { Social: <FaInstagram />, link: "https://www.instagram.com/nabilgj" },
  { Social: <FaTwitter />, link: "https://twitter.com/nabilah18049984" },
];

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <h2>
                      Lets <br /> Connect
                    </h2>
                    <Link className="rn-button-style--2" to="/contact">
                      <span>Reach us</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Instant Links</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/portfolio">Projects</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Reach us at</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:info@company.com">
                              nabilgj.bnm@gmail.com
                            </a>
                          </li>
                          <li>
                            <a href="tel:+12898343201">+1 289 834 3201</a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`} target="_blank">
                                  {val.Social}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>Copyrights © 2021. All Rights Reserved.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
