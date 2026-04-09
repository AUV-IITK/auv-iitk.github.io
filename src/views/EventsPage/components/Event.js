import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Event.css";
import FadeIn from "views/Animations/FadeIn";
// import { Link } from "react-router-dom";
function Event(props) {
  return (
    <>
      <FadeIn>
        <div className="">
          <Container>
            <Row className="event-container">
              <Col className="ml-auto mr-auto" md="12">
                <a href={props.event.link} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-left comp-heading heading-main">
                    {props.event.name}
                  </h2>
                </a>
              </Col>
              <Col md="8" className="event-image-container my-auto">
                <img src={props.event.image} className="event-image" alt="" />
              </Col>
              <Col md="4" className="headings-container text-left my-auto">
                <h1 className="small-heading primary-heading">
                  {props.event.heading}
                </h1>
                <h2 className=" mt-3 small-heading-edited secondary-heading">
                  {props.event.subheading}
                </h2>
                <h1 className="small-heading primary-heading">
                  {props.event.heading02}
                </h1>
                {/* {(props.event.name !== "ROBOSUB") ?
                  <h2 className=" mt-3 small-heading-edited secondary-heading">
                  //  {props.event.subheading02}
                  //</h2> : 
                  <Link to='/vehicles/tarang' className="small-heading-edited tarang-link"> {props.event.subheading02}</Link>
                } */}
                <h2 className=" mt-3 small-heading-edited secondary-heading">
                  {props.event.subheading08}
                </h2>
                <h2 className=" mt-3 small-heading-edited secondary-heading">
                  {props.event.subheading02}
                </h2>
                <h2 className=" mt-3 small-heading-edited secondary-heading">
                  {props.event.subheading03}
                </h2>
                <h2 className=" mt-3 small-heading-edited secondary-heading">
                  {props.event.subheading04}
                </h2>
                <h1 className="small-heading primary-heading">
                  {props.event.heading03}
                </h1>
                <h2 className=" mt-3 small-heading-edited secondary-heading">
                  {props.event.subheading05}
                </h2>
                <h2 className=" mt-3 small-heading-edited secondary-heading">
                  {props.event.subheading06}
                </h2>
                <h2 className=" mt-3 small-heading-edited secondary-heading">
                  {props.event.subheading07}
                </h2>
              </Col>
            </Row>
            <Row>
              <p className="ml-3 mt-5 text-left auv-description-primary ">
                {props.event.para1}
              </p>
              <p className="ml-3 text-left auv-description-primary ">
                {props.event.para2}
              </p>
            </Row>
          </Container>
        </div>
      </FadeIn>
    </>
  );
}

export default Event;
