import React from "react";
// import anahitapic from "assets/img/anahita-1.jpg";
import atalpic from "assets/img/atal/atal2026.jpeg";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import { Col, Container, Row } from "reactstrap";

function AboutUs(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let MoreButton = props.setMore ? null : (
    <Link
      to="/about-us"
      className="blogs-more-button"
      style={{ margin: "0 auto" }}
    >
      More
    </Link>
  );
  return (
    <div>
      <div className=" text-center ">
        <Container style={{ marginTop: "10rem" }}>
          <div className=" col-12 text-center">
            <h2 className="heading-main mt-5 mb-5">ABOUT US</h2>
          </div>
          <Row>
            <Col className="mt-0 left-desc" xl="9">
              <img src={atalpic} className=" w-100"></img>

              <p className="description auv-description-primary">
                We are a team of undergraduate students researching in the field
                of marine robotics. The team started off in 2014, as the
                brainchild of a group of enthusiastic engineers. From a team
                with just an idea to create an impact on underwater robotics, we
                have grown into a family of over 25 members, through consistent
                dedication and hard work.
              </p>
              <p className="description auv-description-primary">
                We have successfully designed and manufactured three robust
                autonomous underwater vehicles (AUV), namely, Varun, Anahita and Atal.
                These machines are capable of navigating in unknown
                environments, performing acoustic localization, and identifying
                objects using computer vision.{" "}
              </p>
              <br />

              {MoreButton}
            </Col>

            <div className="all-icons-container">

              <div className="single-icon-container">
                <div className=" icon-auv">
                  <i className="  mt-4 fa fa-users fa-5x icon-responsive" />
                  {/* In order to align the icons center add the class 'icon-align' to each of the icon */}
                  <div className="description2">
                    <h4 className="mt-3">
                      <strong>25 Members</strong>
                    </h4>
                  </div>
                </div>
              </div>
              
              <div className="single-icon-container">
                <div className=" icon-auv">
                  <i className="mt-4 fa fa-briefcase fa-5x icon-responsive" />
                  <div className="description2">
                    <h4 className="mt-3">
                      <strong>50+ Projects </strong>
                    </h4>
                  </div>
                </div>
              </div>
              <div className=" single-icon-container">
                <div className=" icon-auv">
                  <i className=" mt-4 fa fa-cogs fa-5x icon-responsive " />
                  <div className="description2">
                    <h4 className="mt-3">
                      <strong>3 Vehicles made</strong>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="single-icon-container">
                <div className=" icon-auv">
                  <i className="mt-4 fa fa-coffee fa-5x icon-responsive" />
                  <div className="description2">
                    <h4 className="mt-3">
                      <strong>800+ NightOuts</strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <br />
          <br />
        </Container>
      </div>
    </div>
  );
}
export default AboutUs;
