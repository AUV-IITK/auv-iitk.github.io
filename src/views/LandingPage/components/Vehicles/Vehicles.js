import React from 'react';
import atal from "assets/img/atal.png";
import varun from "assets/img/varun/varun-underwater.jpg";
import anahita from "assets/img/anahita/anahita-underwater.png";
import { Link } from "react-router-dom";
import "./Vehicles.css"
import {
  Col,
  Container,
  Row
} from "react-bootstrap";

function Vehicles() {
  return (
    <>
      <div className="section landing-section mt-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="col-12">
              <h2 className="text-center heading-main">VEHICLES</h2>
            </Col>
          </Row>
          <Row className="vehicle-row">
            <Col sm="12" lg="5" className="text-center my-auto">
              <Link to='/vehicles/atal'>
                <img src={atal} className="w-100 vehicle-image" />
              </Link>
            </Col>
            <Col sm="12" lg="7" className="my-auto">
              <h2 className="text-center mt-0 mb-3 vehicle-heading">Atal</h2>
              <p className=" auv-description-primary">Atal is our third generation Autonomous Underwater Vehicle (AUV). Atal has a robust, leak-proof and lightweight central hull made from aluminium. It has sensors like IMU, DVL and cameras on-board and can efficiently perform tasks like torpedo shooting, picking and dropping different objects, localization in an unknown underwater environment and complex space-constrained manoeuvres. In addition, it has improved battery and additional safety mechanisms installed to prevent damage.</p>
              <p className=" auv-description-primary">Atal will participate in RoboSub-2026.</p>
              <div className="text-center ml-auto mr-auto">
                <Link to='/vehicles/atal' className="blogs-more-button text-center" style={{ margin: "0 auto" }}>
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="vehicle-row">
            <Col sm="12" lg="5" className="text-center my-auto">
              <Link to='/vehicles/anahita'>
                <img src={anahita} className="w-100 vehicle-image" />
              </Link>
            </Col>
            <Col sm="12" lg="7" className="my-auto">
              <h2 className="text-center mt-0 mb-3 vehicle-heading">Anahita</h2>
              <p className=" auv-description-primary">Anahita is an improvement over AUV-IITK’s previous vehicle Varun in terms of its modularity, robustness, ease of manufacturing and assembly. The vehicle is designed to perform complex spaceconstrained tasks and at the same time, not compromising on the maneuverability</p>
              <p className=" auv-description-primary">Anahita participated in RoboSub-2019, San Diego and was the first runner up at NIOT-SAVe, 2019.</p>
              <div className="text-center">
                <Link to='/vehicles/anahita' className="blogs-more-button text-center" style={{ margin: "0 auto" }}>
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="vehicle-row">
            <Col sm="12" lg="5" className="text-center my-auto">
              <Link to='/vehicles/varun'>
                <img src={varun} className="w-100 vehicle-image" />
              </Link>
            </Col>
            <Col sm="12" lg="7" className="my-auto">
              <h2 className="text-center mt-0 mb-3 vehicle-heading">Varun</h2>
              <p className="auv-description-primary">Varun was the first Autonomous Underwater Vehicle developed by our team. With a modular design for easy assembly and installation, Varun could be used as a staging vehicle for carrying out experiments, autonomous underwater inspection and data collection. It has upto four hours of continuous operation capacity.</p>
              <p className=" auv-description-primary">Varun was the first runner up bot in NIOT-SAVe 2016.</p>
              <div className="text-center">
                <Link to='/vehicles/varun' className="blogs-more-button text-center" style={{ margin: "0 auto" }}>
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}
export default Vehicles;
