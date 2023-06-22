import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Subsystems.css";

function SubS() {
  return (
    <div className="section team-data landing-section">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="ml-auto mr-auto" md="12">
            <h2 className="text-center heading-main">Subsystems</h2>
          </Col>
        </Row>
        <Row>
          <Col className="container text-center">
            <Card className="card-plain">
              <div className="row w-100 justify-content-center font-weight-bold h2">
                MECHANICAL 
                {/* <i class="fa fa-cogs fa-md"></i> */}
              </div>
              <p className="hide">
                The mechanical subsystem is responsible for design and
                manufacture of the vehicle. We design the entire vehicle and
                accessories - working on Fluid Dynamics, Actuator controls, and
                Pneumatics. We plan, simulate and test the physical structure of
                the AUV and then manufacture it using state of art manufacturing
                techniques. We use latest software such as SolidWorks and ANSYS
                to make the design robust, modular, light and strong.
              </p>
              <Link to="/mechanical">
                <p className="redirect">Know More</p>
              </Link>
            </Card>
          </Col>
          <Col className="container text-center">
            <Card className="card-plain">
              <div className="row w-100 justify-content-center font-weight-bold h2">
                ELECTRICAL 
                {/* <i class="fa fa-bolt fa-md"></i> */}
              </div>
              <p className="hide">
                The Electrical Subsystem builds the framework powering our AUV
                consisting of Power Distribution System and the Monitoring
                system. Arduino Mega is used to control the actuation and read
                data from various sensors which in turn is controlled by an
                Intel NUC. We work on the electrical aspects of the AUV,
                providing power, driving actuators and interfacing with various
                sensors on board. We build custom PCBs and act as an interface
                between software and mechanical subsystems.
              </p>
              <Link to="/electrical">
                <p className="redirect">Know More</p>
              </Link>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="container text-center">
            <Card className="card-plain">
              <div className="row w-100 justify-content-center font-weight-bold h2">
                SOFTWARE 
                {/* <i class="fa fa-code fa-md" /> */}
              </div>
              <p className="hide">
                The software subsystem develops the algorithms controlling the
                robot and making it autonomous. We use latest cutting edge
                technologies in the world of robotics software. The software
                subsytem carries out simulations Gazebo and UWSim to ensure that
                things work smoothly before actual testing.The main aim of
                software subsystem is to write code, that is generic and error
                free, in order efficiently coordinate the vehicles motion and
                enable it perform at full potential.
              </p>
              <Link to="/software">
                <p className="redirect">Know More</p>
              </Link>
            </Card>
          </Col>
          <Col className="container text-center">
            <Card className="card-plain">
              <div className="row w-100 justify-content-center font-weight-bold h2">
                BUSINESS &nbsp; 
                {/* <i class="fa fa-briefcase fa-md"></i> */}
              </div>
              <p className="hide">
                The Business subsystem manages the fundings and outreach
                activities of the team. We manage the expenditures and fundings
                of the team. We represent the team before our sponsors and try
                to procure them. We maintain the team website and pages on the
                different social media platforms. The main aim of the business
                subsystem is to ensure that the team gets sufficient fundings
                and has an excellent outreach to ensure the smooth functioning
                of the other three subsystems.
              </p>
              <Link to="/business">
                <p className="redirect">Know More</p>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SubS;
