import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>Testimonial</p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Name of client</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>Clients feedback</p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Name of client</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>Clients feedback</p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Name of client</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>Clients feedback</p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Name of client</span>
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-1.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-2.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>

                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-5.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/testimonial-6.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// into demo on home page
export default Testimonial;
